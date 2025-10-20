'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn, SportsEsports, Apple, Android, Security, Support, Business } from '@mui/icons-material';
import {
  productLinks,
  companyLinks,
  supportLinks,
  legalLinks,
  socialLinks,
  contactInfo
} from 'constants/landing/footer';
import { colors, getSectionPadding, getContainerMaxWidth } from 'utils/landing/styles';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.text,
        color: 'white',
        ...getSectionPadding(),
      }}
    >
      <Container maxWidth={getContainerMaxWidth() as any}>
        {/* Main Footer Content */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Company Info */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SportsEsports sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    fontSize: '1.5rem',
                  }}
                >
                  PoolZapp
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#A1A1A6',
                  lineHeight: 1.6,
                  mb: 4,
                  fontSize: '0.9375rem',
                }}
              >
                La plataforma líder para la gestión integral de salones de billar.
                Optimiza tus operaciones, maximiza tus ganancias y brinda la mejor
                experiencia a tus clientes.
              </Typography>

              {/* Contact Info */}
              <Stack spacing={2}>
                <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#A1A1A6', fontSize: '0.875rem' }}
                  >
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  Producto
                </Typography>
                <Stack spacing={1.5}>
                  {productLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#86868B',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: '#007AFF',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  Empresa
                </Typography>
                <Stack spacing={1.5}>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#86868B',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: '#007AFF',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  Soporte
                </Typography>
                <Stack spacing={1.5}>
                  {supportLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#86868B',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: '#007AFF',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#A1A1A6',
                    mb: 3,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  Recibe las últimas actualizaciones y consejos para tu negocio.
                </Typography>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#007AFF',
                    color: '#007AFF',
                    mb: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 122, 255, 0.1)',
                      borderColor: '#007AFF',
                    },
                  }}
                >
                  Suscribirse
                </Button>

                
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#2C2C2E', mb: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: '#A1A1A6',
                fontSize: '0.875rem',
                mb: 2,
              }}
            >
              © 2024 PoolZapp. Todos los derechos reservados.
            </Typography>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: '#A1A1A6',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#007AFF',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'white',
                mb: 2,
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Síguenos
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    color: '#A1A1A6',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    width: 40,
                    height: 40,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#007AFF',
                      backgroundColor: 'rgba(0, 122, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <social.icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}