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
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
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
            Términos de Servicio
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
              1. Aceptación de los Términos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Al acceder y utilizar PoolZapp (&ldquo;el Servicio&rdquo;), usted acepta estar sujeto a estos Términos de Servicio (&ldquo;Términos&rdquo;). Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              2. Descripción del Servicio
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              PoolZapp es una plataforma de gestión integral para salones de billar que permite:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Gestión de mesas y reservas"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Control de inventario y consumos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Análisis y reportes de negocio"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Gestión de clientes y pagos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              3. Registro y Cuenta de Usuario
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Para utilizar nuestro Servicio, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Mantener la confidencialidad de su contraseña"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Todas las actividades que ocurran bajo su cuenta"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Notificar inmediatamente cualquier uso no autorizado"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              4. Uso Aceptable
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Usted se compromete a no utilizar el Servicio para:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Actividades ilegales o no autorizadas"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Interferir con la seguridad del Servicio"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Transmitir virus, malware o código malicioso"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Violar derechos de propiedad intelectual"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              5. Propiedad Intelectual
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de PoolZapp y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              6. Privacidad y Protección de Datos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Su privacidad es importante para nosotros. Consulte nuestra Política de Privacidad para obtener información sobre cómo recopilamos, utilizamos y protegemos su información personal.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              7. Limitación de Responsabilidad
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              En ningún caso PoolZapp, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables de daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              8. Terminación
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación si usted incumple los Términos. Al terminar, su derecho a usar el Servicio cesará inmediatamente.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              9. Ley Aplicable
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              10. Cambios a los Términos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que los nuevos términos entren en vigor.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Contacto
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6 }}>
              Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos en:
              <br />
              <strong>Email:</strong> legal@poolzapp.com
              <br />
              <strong>Teléfono:</strong> +52 (55) 1234-5678
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}