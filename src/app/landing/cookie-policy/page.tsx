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
import { useRouter } from 'next/navigation';

export default function CookiePolicyPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F2F2F7',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.back()}
          sx={{ mb: 3 }}
        >
          Volver
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1D1D1F',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Política de Cookies
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#86868B',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              1. ¿Qué son las Cookies?
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Nos ayudan a hacer que nuestro sitio web funcione correctamente, sea más seguro, proporcione una mejor experiencia de usuario y nos permita entender cómo funciona el sitio web y analizar qué se puede mejorar.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              2. ¿Cómo Utilizamos las Cookies?
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              PoolZapp utiliza cookies para varios propósitos que se describen a continuación. Desafortunadamente, en la mayoría de los casos no hay opciones estándar de la industria para deshabilitar las cookies sin deshabilitar completamente la funcionalidad y las características que agregan a este sitio.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              3. Tipos de Cookies que Utilizamos
            </Typography>
            
            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #E5E5EA', mb: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#F2F2F7' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Tipo de Cookie</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Propósito</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Duración</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Esencial</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Cookies Esenciales</strong>
                    </TableCell>
                    <TableCell>
                      Necesarias para el funcionamiento básico del sitio web, incluyendo autenticación y seguridad
                    </TableCell>
                    <TableCell>Sesión / 1 año</TableCell>
                    <TableCell>
                      <Chip label="Sí" color="error" size="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Cookies de Rendimiento</strong>
                    </TableCell>
                    <TableCell>
                      Recopilan información sobre cómo los visitantes usan el sitio web para mejorar el rendimiento
                    </TableCell>
                    <TableCell>1-2 años</TableCell>
                    <TableCell>
                      <Chip label="No" color="success" size="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Cookies Funcionales</strong>
                    </TableCell>
                    <TableCell>
                      Permiten que el sitio web recuerde las elecciones que hace para proporcionar funcionalidad mejorada
                    </TableCell>
                    <TableCell>1 año</TableCell>
                    <TableCell>
                      <Chip label="No" color="success" size="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Cookies de Marketing</strong>
                    </TableCell>
                    <TableCell>
                      Utilizadas para rastrear visitantes en sitios web para mostrar anuncios relevantes y atractivos
                    </TableCell>
                    <TableCell>1-2 años</TableCell>
                    <TableCell>
                      <Chip label="No" color="success" size="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              4. Cookies Específicas que Utilizamos
            </Typography>
            
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#1D1D1F' }}>
              4.1 Cookies de Autenticación y Seguridad
            </Typography>
            <List sx={{ pl: 2, mb: 3 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• auth_token: Mantiene su sesión de usuario activa"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• csrf_token: Protege contra ataques de falsificación de solicitudes"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• session_id: Identifica su sesión única en el servidor"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#1D1D1F' }}>
              4.2 Cookies de Preferencias
            </Typography>
            <List sx={{ pl: 2, mb: 3 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• language_preference: Recuerda su idioma preferido"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• theme_preference: Guarda su preferencia de tema (claro/oscuro)"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• cookie_consent: Registra sus preferencias de cookies"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#1D1D1F' }}>
              4.3 Cookies de Análisis
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              5. Cookies de Terceros
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. Los siguientes servicios de terceros pueden establecer cookies a través de nuestro sitio:
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              6. Gestión de Cookies
            </Typography>
            
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#1D1D1F' }}>
              6.1 Configuración del Navegador
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#1D1D1F' }}>
              6.2 Centro de Preferencias de Cookies
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Proporcionamos un centro de preferencias de cookies donde puede gestionar sus configuraciones de cookies en cualquier momento. Puede acceder a él a través del banner de cookies o en la configuración de su cuenta.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              7. Cookies Esenciales
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Algunas cookies son esenciales para el funcionamiento de nuestro sitio web y no pueden ser deshabilitadas. Estas incluyen cookies que:
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              8. Actualizaciones de esta Política
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Por favor, revise esta Política de Cookies regularmente para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              9. Más Información
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Si desea obtener más información sobre las cookies y cómo funcionan, puede visitar los siguientes recursos:
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
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Contacto sobre Cookies
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6 }}>
              Si tiene preguntas sobre nuestra Política de Cookies, contáctenos:
              <br />
              <strong>Email:</strong> cookies@poolzapp.com
              <br />
              <strong>Teléfono:</strong> +52 (55) 1234-5678
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}