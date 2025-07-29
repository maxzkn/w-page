'use client';
import { useTranslations } from 'next-intl';

export const ViewGalleryButton = ({ className }: { className: string }) => {
  const t = useTranslations('Home');
  const handleClick = () => {
    const el = document.getElementById('wedding-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button type="button" className={className} onClick={handleClick}>
      {t('gallery.button')}
    </button>
  );
};
