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

  useEffect(() => {
    validateSession();
  }, []);

  const validateSession = async () => {
    // Skip authentication in development mode (localhost)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

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

  if (!isAuthenticated) {
    return <Login locale={locale} onLoginSuccess={handleLoginSuccess} />;
  }

  return <>{children}</>;
}
