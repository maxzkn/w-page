import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If accessing root path, redirect to English
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Check if the pathname has a locale
  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to English if no locale is specified
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
