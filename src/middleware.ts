import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  localePrefix: 'always',
  defaultLocale: 'en',
  // Ensure root redirects to default locale
  pathnames: {
    '/': '/en',
  },
});

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
