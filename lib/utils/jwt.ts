import jwt from "jsonwebtoken";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined");
}

export const signJWT = (payload: object, options?: jwt.SignOptions) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    ...(options && options),
    expiresIn: "1d", // Token expires in 1 day
  });
};

export const verifyJWT = <T>(token: string): T => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as T;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
