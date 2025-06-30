"use server";

import { signJWT } from "../utils/jwt";
import { User } from "../db/models/user.model";
import { cookies } from "next/headers";
import { connectToDatabase } from "../db/db";

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
}

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // Create new user
    const user = await User.create({ name, email, password });

    // Generate JWT token
    const token = signJWT({
      userId: user._id,
      email: user.email,
      role: user.role,
    });

    const cookieStore = await cookies();
    // Set cookie
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    });

    return {
      success: true,
      message: "User created successfully",
      token,
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: "An error occurred during signup" };
  }
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    await connectToDatabase();

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return { success: false, message: "Invalid credentials" };
    }

    // Generate JWT token
    const token = signJWT({
      userId: user._id,
      email: user.email,
      role: user.role,
    });

    const cookieStore = await cookies();

    // Set cookie
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    });

    return {
      success: true,
      message: "Logged in successfully",
      token,
    };
  } catch (error) {
    console.error("Signin error:", error);
    return { success: false, message: "An error occurred during signin" };
  }
}

export async function signOut(): Promise<AuthResponse> {
  const cookieStore = await cookies();

  try {
    cookieStore.delete("token");
    return { success: true, message: "Logged out successfully" };
  } catch (error) {
    console.error("Signout error:", error);
    return { success: false, message: "An error occurred during signout" };
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();

  try {
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    await connectToDatabase();
    const user = await User.findById(token).select("-password");
    return user;
  } catch (error) {
    console.error("Get current user error:", error);
    return null;
  }
}
