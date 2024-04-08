import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    '/',
    'moviem8/:id',
    'api/webhook/clerk',

  ],
  ignoredRoutes: [
    'api/webhook/clerk',
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};