import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  // Always redirect to default locale when no locale is specified
  localePrefix: 'always',
  defaultLocale: 'en',
  // Ensure root URL redirects to default locale
  pathnames: {
    '/': '/en',
  },
});

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
