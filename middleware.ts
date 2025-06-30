import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { verifyJWT } from "./lib/utils/jwt";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware({
  ...routing,
  defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
  const response = await intlMiddleware(request);

  const { pathname } = request.nextUrl;

  // Extract locale from the pathname
  const localePrefix = `/${request.nextUrl.locale}`;

  console.log("localePrefix", localePrefix);

  // Match /en/dashboard, /fr/dashboard, etc.
  if (pathname.startsWith(`${localePrefix}/dashboard`)) {
    try {
      const token = request.cookies.get("token")?.value;

      if (!token || !verifyJWT(token)) {
        return NextResponse.redirect(
          new URL(`/${request.nextUrl.locale}/signin`, request.url)
        );
      }

      return response;
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/${request.nextUrl.locale}/signin`, request.url)
      );
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
