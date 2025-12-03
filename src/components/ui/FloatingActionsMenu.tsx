'use client';

import React from 'react';
import { Box, SpeedDial, SpeedDialAction, Menu, MenuItem } from '@mui/material';
import { Settings, Close, LightMode, DarkMode, Language as LanguageIcon, Check } from '@mui/icons-material';
import { useTranslation } from '../../hooks/language/useTranslation';
import type { Language } from '../../contexts/language/LanguageContext';

export default function FloatingActionsMenu() {
  const [open, setOpen] = React.useState(false);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDark, setIsDark] = React.useState(false);
  const { language, changeLanguage, getAvailableLanguages } = useTranslation();
  const availableLanguages = getAvailableLanguages();
  const languageConfig = {
    es: { nativeName: 'Español', shortCode: 'ES', flag: '🇲🇽' },
    en: { nativeName: 'English', shortCode: 'EN', flag: '🇺🇸' },
  } as const;

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
  }, [applyTheme]);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(next === 'dark');
    localStorage.setItem('theme', next);
    applyTheme(next);
  };
  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = () => setLangAnchorEl(null);

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1400 }}>
      <SpeedDial
        ariaLabel="Acciones flotantes"
        icon={<Settings />}
        openIcon={<Close />}
        open={open}
        FabProps={{ onClick: () => setOpen((v) => !v) }}
        sx={{ '& .MuiFab-primary': { bgcolor: 'var(--color-primary)' } }}
      >
        <SpeedDialAction
          icon={isDark ? <DarkMode /> : <LightMode />}
          tooltipTitle={isDark ? 'Tema oscuro' : 'Tema claro'}
          onClick={toggleTheme}
          FabProps={{ sx: { bgcolor: 'var(--color-surface)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)' } }}
        />  
        <SpeedDialAction
          icon={<LanguageIcon />}
          tooltipTitle={'Idioma'}
          onClick={handleLanguageClick}
          FabProps={{ sx: { bgcolor: 'var(--color-surface)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)' } }}
        />
      </SpeedDial>

      <Menu
        anchorEl={langAnchorEl}
        open={Boolean(langAnchorEl)}
        onClose={handleLanguageClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3,
            backgroundColor: 'var(--color-overlay)',
            backdropFilter: 'blur(16px)',
            border: '0.5px solid var(--color-glass-border)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {availableLanguages.map((lang) => {
          const code = lang.code as Language;
          const cfg = languageConfig[code];
          const selected = language === code;
          return (
            <MenuItem
              key={code}
              onClick={() => { changeLanguage(code); handleLanguageClose(); }}
              selected={selected}
            >
              <span style={{ fontSize: '1.125rem', marginRight: 8 }}>{cfg?.flag}</span>
              {cfg?.nativeName || code.toUpperCase()}
              {selected && <Check sx={{ fontSize: '1rem', color: 'var(--color-primary)', ml: 1, bgcolor: 'var(--color-primary)' }} />}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
