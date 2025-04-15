import { Link } from "@/i18n/navigation";
import SignInForm from "@/components/public/signin/SignInForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SignInPage");
  return {
    title: t("title"),
    description: t("description"),
  };
}
const SignInPage = () => {
  const t = useTranslations("SignInPage");
 
  return (
    <div className="w-full max-w-md mx-auto space-y-10 ">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-md text-gray-500">
          {t("dontHaveAccount")}{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            {t("signUp")}
          </Link>
        </p>
      </div>

      <SignInForm />
    </div>
  );
};

export default SignInPage;