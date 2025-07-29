import React from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Cormorant_Garamond, Cinzel } from 'next/font/google';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import '@/app/globals.css';
import { use } from 'react';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: '300',
});

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${cormorantGaramond.variable} ${cinzel.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
