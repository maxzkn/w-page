'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './hero-navigation';

interface LoginProps {
  onLoginSuccess: () => void;
  locale: string;
}

export function Login({ onLoginSuccess, locale }: LoginProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslations('Login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://password-protection.maks-zyk.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.sessionToken) {
          // Store session token and expiration
          localStorage.setItem('wedding-session-token', data.sessionToken);
          localStorage.setItem('wedding-session-expires', data.expiresAt);
          onLoginSuccess();
        } else {
          setError(t('error'));
        }
      } else {
        setError(t('error'));
      }
    } catch {
      setError(t('networkError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 relative">
      <div className="absolute top-8 right-10 z-20">
        <LanguageSwitcher currentLocale={locale} invert />
      </div>
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-cinzel text-gray-900 mb-2">{t('title')}</h2>
          <p className="text-gray-600 font-cormorant-garamond">{t('subtitle')}</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              {t('passwordLabel')}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 text-main font-cormorant-garamond"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-600 text-main font-cormorant-garamond text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group font-primary uppercase font-semibold relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-lg text-white bg-black hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? t('loading') : t('submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
