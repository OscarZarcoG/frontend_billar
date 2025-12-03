'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useTranslation } from '../../../hooks/language/useTranslation';
import { useRouter } from 'next/navigation';

export default function CookiePolicyPage() {
  const router = useRouter();
  const { t, language } = useTranslation();
  const [lastUpdated, setLastUpdated] = React.useState<string>("");
  React.useEffect(() => {
    try {
      const locale = language === 'es' ? 'es-ES' : 'en-US';
      const formatted = new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' }).format(new Date());
      setLastUpdated(formatted);
    } catch {
      setLastUpdated('');
    }
  }, [language]);

  return (
    <Box className="min-h-screen bg-background text-foreground transition-colors" sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.back()}
          sx={{ mb: 3 }}
        >
          {t('common.back')}
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: 'var(--color-surface)',
            borderRadius: 3,
            border: '1px solid var(--color-border)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'var(--color-foreground)',
              mb: 2,
              textAlign: 'center',
            }}
          >
            {t('policies.cookie.title')}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'var(--color-muted)',
              textAlign: 'center',
              mb: 4,
            }}
          >
            {t('policies.common.last_updated', { date: lastUpdated })}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section1.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section1.body')}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section2.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section2.body')}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section3.title')}
            </Typography>
            
            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid var(--color-border)', mb: 3 }}>
              <Table>
                <TableHead>
              <TableRow sx={{ backgroundColor: 'var(--color-background)' }}>
                <TableCell sx={{ fontWeight: 600 }}>{t('policies.cookie.section3.table.headers.type')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('policies.cookie.section3.table.headers.purpose')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('policies.cookie.section3.table.headers.duration')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('policies.cookie.section3.table.headers.essential')}</TableCell>
              </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>{t('policies.cookie.section3.table.rows.essential.name')}</strong>
                    </TableCell>
                  <TableCell>
                      {t('policies.cookie.section3.table.rows.essential.purpose')}
                  </TableCell>
                  <TableCell>{t('policies.cookie.section3.table.rows.essential.duration')}</TableCell>
                  <TableCell>
                      <Chip label={t('policies.common.yes')} color="error" size="small" />
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>{t('policies.cookie.section3.table.rows.performance.name')}</strong>
                    </TableCell>
                  <TableCell>
                      {t('policies.cookie.section3.table.rows.performance.purpose')}
                  </TableCell>
                  <TableCell>{t('policies.cookie.section3.table.rows.performance.duration')}</TableCell>
                  <TableCell>
                      <Chip label={t('policies.common.no')} color="success" size="small" />
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>{t('policies.cookie.section3.table.rows.functional.name')}</strong>
                    </TableCell>
                  <TableCell>
                      {t('policies.cookie.section3.table.rows.functional.purpose')}
                  </TableCell>
                  <TableCell>{t('policies.cookie.section3.table.rows.functional.duration')}</TableCell>
                  <TableCell>
                      <Chip label={t('policies.common.no')} color="success" size="small" />
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>{t('policies.cookie.section3.table.rows.marketing.name')}</strong>
                    </TableCell>
                  <TableCell>
                      {t('policies.cookie.section3.table.rows.marketing.purpose')}
                  </TableCell>
                  <TableCell>{t('policies.cookie.section3.table.rows.marketing.duration')}</TableCell>
                  <TableCell>
                      <Chip label={t('policies.common.no')} color="success" size="small" />
                  </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              4. Cookies Específicas que Utilizamos
            </Typography>
            
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              4.1 Cookies de Autenticación y Seguridad
            </Typography>
            <List sx={{ pl: 2, mb: 3 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• auth_token: Mantiene su sesión de usuario activa"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• csrf_token: Protege contra ataques de falsificación de solicitudes"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• session_id: Identifica su sesión única en el servidor"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              4.2 Cookies de Preferencias
            </Typography>
            <List sx={{ pl: 2, mb: 3 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• language_preference: Recuerda su idioma preferido"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• theme_preference: Guarda su preferencia de tema (claro/oscuro)"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• cookie_consent: Registra sus preferencias de cookies"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section4_3.title')}
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• _ga: Google Analytics - Distingue usuarios únicos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• _gid: Google Analytics - Distingue usuarios únicos (24 horas)"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• _gat: Google Analytics - Limita la tasa de solicitudes"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section5.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section5.body')}
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Google Analytics: Para análisis de uso del sitio web"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Stripe: Para procesamiento seguro de pagos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Intercom: Para soporte al cliente y chat en vivo"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section6.title')}
            </Typography>
            
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section6_1.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section6_1.body')}
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section6_2.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section6_2.body')}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section7.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section7.body')}
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Permiten que recuerde información que cambia la forma en que se comporta o se ve el sitio web"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Mantienen su sesión de usuario durante su visita"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Proporcionan seguridad y previenen fraudes"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section8.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section8.body')}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.section9.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              {t('policies.cookie.section9.body')}
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• All About Cookies: www.allaboutcookies.org"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Network Advertising Initiative: www.networkadvertising.org"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.cookie.contact.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>
              {t('policies.cookie.contact.body')}
              <br />
              <strong>{t('policies.common.email')}</strong> cookies@poolzapp.com
              <br />
              <strong>{t('policies.common.phone')}</strong> +52 (55) 1234-5678
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
