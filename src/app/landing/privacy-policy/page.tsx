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
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useTranslation } from '../../../hooks/language/useTranslation';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
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
            {t('policies.privacy.title')}
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
              1. Introducción
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              En PoolZapp, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando utiliza nuestros servicios.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              2. Información que Recopilamos
            </Typography>
            
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              2.1 Información Personal
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Recopilamos la siguiente información personal cuando usted:
            </Typography>
            <List sx={{ pl: 2, mb: 3 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Nombre completo y datos de contacto"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Dirección de correo electrónico"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Número de teléfono"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Información de facturación y pago"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Datos del negocio (nombre, dirección, tipo de establecimiento)"
                  primaryTypographyProps={{ color: 'var(--color-muted)' }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'var(--color-foreground)' }}>
              2.2 Información de Uso
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Datos de navegación y uso de la plataforma"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Dirección IP y información del dispositivo"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Cookies y tecnologías similares"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              3. Cómo Utilizamos su Información
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Utilizamos su información personal para:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Proporcionar y mantener nuestros servicios"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Procesar pagos y transacciones"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Comunicarnos con usted sobre el servicio"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Mejorar nuestros servicios y desarrollar nuevas funcionalidades"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Cumplir con obligaciones legales"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Prevenir fraudes y garantizar la seguridad"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              4. Base Legal para el Procesamiento
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid var(--color-border)' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'var(--color-background)' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Propósito</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Base Legal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Prestación del servicio</TableCell>
                    <TableCell>Ejecución del contrato</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Procesamiento de pagos</TableCell>
                    <TableCell>Ejecución del contrato</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Marketing directo</TableCell>
                    <TableCell>Consentimiento</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mejora del servicio</TableCell>
                    <TableCell>Interés legítimo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cumplimiento legal</TableCell>
                    <TableCell>Obligación legal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              5. Compartir Información
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              No vendemos, intercambiamos o transferimos su información personal a terceros, excepto en los siguientes casos:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Proveedores de servicios que nos ayudan a operar nuestro negocio"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Cuando sea requerido por ley o autoridades competentes"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Para proteger nuestros derechos, propiedad o seguridad"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Con su consentimiento explícito"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              6. Seguridad de los Datos
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción, incluyendo:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Cifrado de datos en tránsito y en reposo"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Controles de acceso y autenticación"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Monitoreo regular de seguridad"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Capacitación del personal en protección de datos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              7. Sus Derechos
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Bajo las leyes de protección de datos aplicables, usted tiene los siguientes derechos:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho de acceso a sus datos personales"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho de rectificación de datos inexactos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho de supresión ('derecho al olvido')"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho a la limitación del tratamiento"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho a la portabilidad de los datos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Derecho de oposición al tratamiento"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              8. Retención de Datos
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo cualquier requisito legal, contable o de informes.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              9. Transferencias Internacionales
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Sus datos pueden ser transferidos y procesados en países fuera de su país de residencia. Nos aseguramos de que dichas transferencias cumplan con las leyes de protección de datos aplicables mediante el uso de salvaguardas apropiadas.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              10. Cambios a esta Política
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6, mb: 2 }}>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de &ldquo;última actualización&rdquo;.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-foreground)' }}>
              {t('policies.privacy.contact.title')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>
              {t('policies.privacy.contact.body')}
              <br />
              <strong>{t('policies.common.email')}</strong> privacy@poolzapp.com
              <br />
              <strong>{t('policies.common.phone')}</strong> +52 (55) 1234-5678
              <br />
              <strong>{t('policies.common.address')}</strong> Av. Reforma 123, Ciudad de México, México
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
