'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Avatar,
} from '@mui/material';
import {
  CheckCircle,
  Star,
  PlayCircleOutline,
} from '@mui/icons-material';
import { mainServices, additionalFeatures } from 'constants/landing/services';
import { testimonials } from 'constants/landing/testimonials';
import { colors, getSectionPadding, getContainerMaxWidth } from 'utils/landing/styles';
import { getCardHoverStyles } from 'utils/landing/animations';
import { useTranslation } from '../../hooks/language/useTranslation';

export default function ServicesSection() {
  const { t } = useTranslation();
  return (
    <Box sx={{ ...getSectionPadding(), backgroundColor: colors.background }}>
      <Container maxWidth={getContainerMaxWidth() as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#1D1D1F',
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {t('services.title')}{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('services.title_highlight')}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#86868B',
              fontSize: '1.125rem',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('services.subtitle')}
          </Typography>
        </Box>

        {/* Main Services Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {mainServices.map((service, index) => (
            <Grid key={`service-${index}`} size={{ xs: 12, lg: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  ...getCardHoverStyles(),
                }}
              >
                <Box
                  sx={{
                    height: 6,
                    background: service.gradient,
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: service.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      <service.icon sx={{ fontSize: 32 }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#1D1D1F',
                          mb: 1,
                          fontSize: '1.25rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#86868B',
                          lineHeight: 1.6,
                          fontSize: '0.9375rem',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            fontSize: 18,
                            color: service.color,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#1D1D1F',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Features */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.text,
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            {t('services.additional_features_title')}
          </Typography>
          <Grid container spacing={3}>
            {additionalFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    ...getCardHoverStyles(),
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: '#F5F5F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <feature.icon />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1D1D1F',
                      mb: 1,
                      fontSize: '1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#86868B',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.text,
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            {t('services.testimonials_title')}
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: 3,
                    p: 4,
                    ...getCardHoverStyles(),
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: '#007AFF',
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: '#1D1D1F',
                          fontSize: '0.9375rem',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#86868B',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {testimonial.business}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ fontSize: 16, color: '#FFD700' }} />
                    ))}
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#1D1D1F',
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    &quot;{testimonial.comment}&quot;
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            {t('services.cta_title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              mb: 4,
              opacity: 0.9,
              fontSize: '1.125rem',
            }}
          >
            {t('services.cta_subtitle')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircleOutline />}
              sx={{
                height: 56,
                px: 4,
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: 'white',
                color: '#667eea',
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('services.cta_primary')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                height: 56,
                px: 4,
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('services.cta_secondary')}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}