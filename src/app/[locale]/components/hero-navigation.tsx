'use client';
import { Link } from '@/i18n/navigation';
import { ViewGalleryButton } from './view-gallery-button';

export function LanguageSwitcher({
  currentLocale,
  invert,
}: {
  currentLocale: string;
  invert?: boolean;
}) {
  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'lt', label: 'LT' },
  ];
  return (
    <div className="flex gap-2">
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={`${code}`}
          className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${
            currentLocale === code
              ? invert
                ? 'bg-white text-black border border-transparent'
                : 'bg-white text-black border border-transparent'
              : invert
                ? 'text-black border border-transparent hover:border-black'
                : 'text-white hover:border-white hover:border border border-transparent'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export const HeroNavigation = ({ locale }: { locale: string }) => {
  return (
    <div className="absolute top-8 sm:right-10 z-20 flex items-center gap-3">
      <ViewGalleryButton className="inline-block px-1 py-1 text-main text-white border-b border-transparent hover:border-white transition uppercase" />
      <LanguageSwitcher currentLocale={locale} />
    </div>
  );
};
