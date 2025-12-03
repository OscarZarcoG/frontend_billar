'use client';

import React from 'react';
import { Box, Switch } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

interface DarkModeToggleProps {
  variant?: 'fixed' | 'inline';
  position?: Position;
  offset?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export default function DarkModeToggle({ variant = 'fixed', position = 'top-right', offset = {} }: DarkModeToggleProps) {
  const [isDark, setIsDark] = React.useState(false);

  const applyTheme = React.useCallback((mode: 'light' | 'dark') => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, []);

  React.useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    const initial = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    setIsDark(initial === 'dark');
    applyTheme(initial as 'light' | 'dark');

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const manual = localStorage.getItem('theme');
      if (!manual) {
        const mode = e.matches ? 'dark' : 'light';
        setIsDark(mode === 'dark');
        applyTheme(mode);
      }
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [applyTheme]);

  const handleToggle = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIsDark(checked);
    const mode = checked ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  };

  const getPositionStyles = () => {
    const defaultOffset = { top: 16, right: 16, bottom: 16, left: 16 };
    const finalOffset = { ...defaultOffset, ...offset };
    switch (position) {
      case 'top-left':
        return { position: 'fixed' as const, top: finalOffset.top, left: finalOffset.left, zIndex: 1300 };
      case 'bottom-right':
        return { position: 'fixed' as const, bottom: finalOffset.bottom, right: finalOffset.right, zIndex: 1300 };
      case 'bottom-left':
        return { position: 'fixed' as const, bottom: finalOffset.bottom, left: finalOffset.left, zIndex: 1300 };
      default:
        return { position: 'fixed' as const, top: finalOffset.top, right: finalOffset.right, zIndex: 1300 };
    }
  };

  if (variant === 'inline') {
    return (
      <Box role="group" aria-label="Preferencias de color" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LightMode sx={{ fontSize: 18, color: isDark ? 'var(--color-muted)' : 'var(--color-primary)' }} />
        <Switch color="primary" checked={isDark} onChange={handleToggle} inputProps={{ 'aria-label': 'Alternar tema' }} />
        <DarkMode sx={{ fontSize: 18, color: isDark ? 'var(--color-primary)' : 'var(--color-muted)' }} />
      </Box>
    );
  }

  return (
    <Box
      role="group"
      aria-label="Preferencias de color"
      className="fixed z-50 bg-surface text-foreground border border-border rounded-full shadow-sm px-3 py-1 transition-colors"
      sx={getPositionStyles()}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LightMode sx={{ fontSize: 18, color: isDark ? 'var(--color-muted)' : 'var(--color-primary)' }} />
        <Switch
          color="primary"
          checked={isDark}
          onChange={handleToggle}
          inputProps={{ 'aria-label': 'Alternar tema' }}
        />
        <DarkMode sx={{ fontSize: 18, color: isDark ? 'var(--color-primary)' : 'var(--color-muted)' }} />
      </Box>
    </Box>
  );
}
