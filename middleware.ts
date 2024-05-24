import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes } from "@/routes";

//vscode: disable-linting
//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
