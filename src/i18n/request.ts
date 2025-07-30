import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Completely ignore any locale detection, always use English
  return {
    locale: 'en',
    messages: (await import(`../messages/en.json`)).default,
  };
});
