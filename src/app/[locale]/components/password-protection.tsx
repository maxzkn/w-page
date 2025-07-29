'use client';

import React, { useState, useEffect } from 'react';
import { Login } from './login';

interface PasswordProtectionProps {
  children: React.ReactNode;
  locale: string;
}

export function PasswordProtection({ children, locale }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if we're on localhost
    if (window.location.hostname === 'localhost') {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      validateSession();
    }
  }, []);

  const validateSession = async () => {
    try {
      const sessionToken = localStorage.getItem('wedding-session-token');
      const sessionExpires = localStorage.getItem('wedding-session-expires');

      if (!sessionToken || !sessionExpires) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Check if session has expired
      const now = new Date();
      const expiresAt = new Date(sessionExpires);

      if (now > expiresAt) {
        // Session expired, clear storage
        localStorage.removeItem('wedding-session-token');
        localStorage.removeItem('wedding-session-expires');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Validate session with server
      const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_DOMAIN}/validate-session`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        // Session invalid, clear storage
        localStorage.removeItem('wedding-session-token');
        localStorage.removeItem('wedding-session-expires');
        setIsAuthenticated(false);
      }
    } catch (error) {
      // Network error, assume not authenticated
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Show loading state during initial client-side check
  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login locale={locale} onLoginSuccess={handleLoginSuccess} />;
  }

  return <>{children}</>;
}
