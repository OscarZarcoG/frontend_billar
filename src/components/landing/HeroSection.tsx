'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Grid,
  Card,
} from '@mui/material';
import {
  TableBar,
  Schedule,
  PlayArrow,
  Star,
} from '@mui/icons-material';
import Logotipo from '../ui/logotipo';
import { heroFeatures } from 'constants/landing/hero';
import { gradientBackgrounds, getButtonStyles, getGlassEffect } from 'utils/landing/styles';
import { floatAnimation, getFloatingElementStyles } from 'utils/landing/animations';
import { particleAnimation, getHoverGlowEffect } from 'utils/landing/interactiveAnimations';
import { InteractiveParticles } from './InteractiveParticles';
import { MagneticButton } from './MagneticElements';
import { ButtonsNav } from '../ui/Buttons-nav';
import { useTranslation } from '../../hooks/language/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: gradientBackgrounds.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Interactive Particles Background */}
      <InteractiveParticles count={350} speed={0.5} maxSize={6} interactive={true} color="rgba(255, 255, 255, 1)" />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 100,
                height: 80,
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Logotipo />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              PoolZapp
            </Typography>
          </Box>

          <ButtonsNav />
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '80vh' }}>
          <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    color: 'white',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.1,
                    mb: 3,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {t('hero.title_part1')}{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {t('hero.title_highlight')}
                  </Box>{' '}
                  {t('hero.title_part2')}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 4,
                    maxWidth: 600,
                    mx: { xs: 'auto', lg: 0 },
                  }}
                >
                  {t('hero.subtitle')}
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 4, justifyContent: { xs: 'center', lg: 'flex-start' } }}
                >
                  <MagneticButton strength={0.2}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrow />}
                      sx={{
                        ...getButtonStyles('primary'),
                        ...getHoverGlowEffect('rgba(52, 199, 89, 0.6)'),
                      }}
                    >
                      {t('hero.cta_primary')}
                    </Button>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={getButtonStyles('outline')}
                    >
                      {t('hero.cta_secondary')}
                    </Button>
                  </MagneticButton>
                </Stack>

                {/* Trust Indicators */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} sx={{ fontSize: 16, color: '#FFD700' }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                    }}
                  >
                    {t('hero.trust_indicator')}
                  </Typography>
                </Box>
              </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    ...getGlassEffect(),
                    borderRadius: 4,
                    p: 4,
                    maxWidth: 400,
                    transform: 'rotate(-2deg)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(0deg) translateY(-8px)',
                      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      mb: 3,
                    }}
                  >
                    <Logotipo />


                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#1D1D1F',
                        textAlign: 'center',
                        mb: 3,
                      }}
                    >
                      {t('hero.dashboard_title')}
                    </Typography>
                  </Box>

                  <Stack spacing={2}>
                    {heroFeatures.map((feature) => (
                        <Box
                          key={feature.title}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            backgroundColor: 'rgba(0, 122, 255, 0.05)',
                            borderRadius: 2,
                            border: '1px solid rgba(0, 122, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 122, 255, 0.1)',
                              transform: 'translateX(8px)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              backgroundColor: '#007AFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                            }}
                          >
                            <feature.icon />
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                color: '#1D1D1F',
                                fontSize: '0.875rem',
                              }}
                            >
                              {t(feature.title)}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#86868B',
                                fontSize: '0.75rem',
                              }}
                            >
                              {t(feature.description)}
                            </Typography>
                          </Box>
                        </Box>
                    ))}
                  </Stack>
                </Card>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: 120,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: gradientBackgrounds.green,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(52, 199, 89, 0.4)',
                    ...getFloatingElementStyles(),
                  }}
                >
                  <TableBar sx={{ fontSize: 32, color: 'white' }} />
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    left: 120,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: gradientBackgrounds.orange,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(255, 149, 0, 0.4)',
                    ...getFloatingElementStyles('1s'),
                  }}
                >
                  <Schedule sx={{ fontSize: 32, color: 'white' }} />
                </Box>
              </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CSS Animations */}
      <style jsx>{floatAnimation}</style>
      <style jsx>{particleAnimation}</style>
    </Box>
  );
}
