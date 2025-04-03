import { Link } from "@/i18n/navigation";
import SignUpForm from "@/components/public/signup/SignUpForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SignUpPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}
const SignUpPage = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Sign Up</h1>
          <p className="text-md text-gray-500">
            Already have an account ?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUpPage;
