'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Tooltip,
  Fade,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Language as LanguageIcon,
  Check,
  Public,
} from '@mui/icons-material';
import { useTranslation } from '../../hooks/language/useTranslation';
import type { Language } from '../../contexts/language/LanguageContext';

const languageConfig = {
  es: {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    flag: '🇲🇽',
    shortCode: 'ES',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    shortCode: 'EN',
  },
} as const;

interface LanguageSelectorProps {
  variant?: 'button' | 'icon' | 'compact';
  showFlag?: boolean;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'button',
  showFlag = true,
  showText = true,
  size = 'medium',
  color = 'inherit',
}) => {
  const { language, changeLanguage, getAvailableLanguages } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    handleClose();
  };

  const currentLanguageConfig = languageConfig[language];
  const availableLanguages = getAvailableLanguages();

  const baseButtonStyles = {
    borderRadius: 2,
    textTransform: 'none' as const,
    fontWeight: 500,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 122, 255, 0.08)',
      transform: 'translateY(-1px)',
    },
  };

  const renderTrigger = () => {
    switch (variant) {
      case 'icon':
        return (
          <Tooltip title={`${currentLanguageConfig.nativeName}`} arrow>
            <IconButton
              onClick={handleClick}
              size={size}
              sx={{
                ...baseButtonStyles,
                color: color === 'inherit' ? '#1D1D1F' : color,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '0.5px solid rgba(60, 60, 67, 0.18)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 122, 255, 0.08)',
                  borderColor: 'rgba(0, 122, 255, 0.3)',
                },
              }}
            >
              {showFlag ? (
                <Typography sx={{ fontSize: size === 'small' ? '1rem' : '1.25rem' }}>
                  {currentLanguageConfig.flag}
                </Typography>
              ) : (
                <LanguageIcon />
              )}
            </IconButton>
          </Tooltip>
        );

      case 'compact':
        return (
          <Button
            onClick={handleClick}
            size={size}
            sx={{
              ...baseButtonStyles,
              minWidth: 'auto',
              px: 1.5,
              py: 0.75,
              color: color === 'inherit' ? '#1D1D1F' : color,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '0.5px solid rgba(60, 60, 67, 0.18)',
              '&:hover': {
                backgroundColor: 'rgba(0, 122, 255, 0.08)',
                borderColor: 'rgba(0, 122, 255, 0.3)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {showFlag && (
                <Typography sx={{ fontSize: '1rem', lineHeight: 1 }}>
                  {currentLanguageConfig.flag}
                </Typography>
              )}
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {currentLanguageConfig.shortCode}
              </Typography>
            </Box>
          </Button>
        );

      default: // 'button'
        return (
          <Button
            onClick={handleClick}
            size={size}
            startIcon={showFlag ? null : <Public />}
            sx={{
              ...baseButtonStyles,
              px: 2,
              py: 1,
              color: color === 'inherit' ? '#1D1D1F' : color,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '0.5px solid rgba(60, 60, 67, 0.18)',
              '&:hover': {
                backgroundColor: 'rgba(0, 122, 255, 0.08)',
                borderColor: 'rgba(0, 122, 255, 0.3)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {showFlag && (
                <Typography sx={{ fontSize: '1.125rem', lineHeight: 1 }}>
                  {currentLanguageConfig.flag}
                </Typography>
              )}
              {showText && (
                <Typography
                  sx={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                  }}
                >
                  {currentLanguageConfig.nativeName}
                </Typography>
              )}
            </Box>
          </Button>
        );
    }
  };

  return (
    <Box>
      {renderTrigger()}
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '0.5px solid rgba(60, 60, 67, 0.18)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
            minWidth: 180,
            '& .MuiMenuItem-root': {
              borderRadius: 2,
              mx: 1,
              my: 0.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 122, 255, 0.08)',
              },
            },
          },
        }}
      >
        {availableLanguages.map((lang) => {
          const langConfig = languageConfig[lang.code as Language];
          const isSelected = language === lang.code;
          
          return (
            <MenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as Language)}
              selected={isSelected}
              sx={{
                backgroundColor: isSelected ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Typography sx={{ fontSize: '1.125rem' }}>
                  {langConfig.flag}
                </Typography>
              </ListItemIcon>
              <ListItemText
                primary={langConfig.nativeName}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '0.9375rem',
                    fontWeight: isSelected ? 600 : 500,
                    color: isSelected ? '#007AFF' : '#1D1D1F',
                  },
                }}
              />
              {isSelected && (
                <Check
                  sx={{
                    fontSize: '1rem',
                    color: '#007AFF',
                    ml: 1,
                  }}
                />
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;