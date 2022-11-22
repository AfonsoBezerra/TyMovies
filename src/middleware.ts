import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line consistent-return
export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('__HOST_TYMOVIES_USER_COOKIE');
  if (!cookie) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/movie/:path*', '/tv/:path*'],
};
