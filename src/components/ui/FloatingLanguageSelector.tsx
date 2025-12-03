'use client';

import React from 'react';
import { Box, Zoom } from '@mui/material';
import { LanguageSelector } from './LanguageSelector';

interface FloatingLanguageSelectorProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  offset?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export const FloatingLanguageSelector: React.FC<FloatingLanguageSelectorProps> = ({
  position = 'top-right',
  offset = {},
}) => {
  const getPositionStyles = () => {
    const defaultOffset = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const finalOffset = { ...defaultOffset, ...offset };

    switch (position) {
      case 'top-left':
        return {
          position: 'fixed' as const,
          top: finalOffset.top,
          left: finalOffset.left,
          zIndex: 1300,
        };
      case 'bottom-right':
        return {
          position: 'fixed' as const,
          bottom: finalOffset.bottom,
          right: finalOffset.right,
          zIndex: 1300,
        };
      case 'bottom-left':
        return {
          position: 'fixed' as const,
          bottom: finalOffset.bottom,
          left: finalOffset.left,
          zIndex: 1300,
        };
      default: // 'top-right'
        return {
          position: 'fixed' as const,
          top: finalOffset.top,
          right: finalOffset.right,
          zIndex: 1300,
        };
    }
  };

  return (
    <Zoom in={true} timeout={300}>
      <Box sx={{ ...getPositionStyles(), color: 'var(--color-foreground)' }}>
        <LanguageSelector 
          variant="compact" 
          size="small"
          showFlag={true}
          showText={true}
        />
      </Box>
    </Zoom>
  );
};

export default FloatingLanguageSelector;
