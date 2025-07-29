'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const ViewGalleryButton = ({ className }: { className: string }) => {
  const t = useTranslations('Home');
  return (
    <Link
      href="#map"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('wedding-gallery')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {t('gallery.button')}
    </Link>
  );
};
