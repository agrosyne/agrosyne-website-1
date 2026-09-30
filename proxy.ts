import { auth } from "@/auth";

export default auth((request) => {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!request.auth) {
      return Response.redirect(
        new URL("/admin/login", request.nextUrl.origin)
      );
    }
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};