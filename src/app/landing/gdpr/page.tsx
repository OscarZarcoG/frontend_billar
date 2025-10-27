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
  Card,
  CardContent,
  Grid,
  Alert,
  AlertTitle,
} from '@mui/material';
import { 
  ArrowBack, 
  Security, 
  Delete, 
  GetApp, 
  Block, 
  Edit,
  Visibility,
  ContactSupport 
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function GDPRPage() {
  const router = useRouter();

  const rights = [
    {
      icon: <Visibility color="primary" />,
      title: "Derecho de Acceso",
      description: "Puede solicitar una copia de todos los datos personales que tenemos sobre usted."
    },
    {
      icon: <Edit color="primary" />,
      title: "Derecho de Rectificación",
      description: "Puede solicitar que corrijamos cualquier información personal inexacta o incompleta."
    },
    {
      icon: <Delete color="primary" />,
      title: "Derecho de Supresión",
      description: "Puede solicitar que eliminemos sus datos personales en ciertas circunstancias."
    },
    {
      icon: <Block color="primary" />,
      title: "Derecho de Limitación",
      description: "Puede solicitar que limitemos el procesamiento de sus datos personales."
    },
    {
      icon: <GetApp color="primary" />,
      title: "Derecho de Portabilidad",
      description: "Puede solicitar recibir sus datos en un formato estructurado y legible por máquina."
    },
    {
      icon: <ContactSupport color="primary" />,
      title: "Derecho de Oposición",
      description: "Puede oponerse al procesamiento de sus datos personales en ciertas circunstancias."
    }
  ];

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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Security sx={{ fontSize: 48, color: '#007AFF', mb: 2 }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#1D1D1F',
                mb: 2,
              }}
            >
              Cumplimiento GDPR
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#424245',
                mb: 1,
              }}
            >
              Reglamento General de Protección de Datos
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#86868B',
              }}
            >
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </Typography>
          </Box>

          <Alert severity="info" sx={{ mb: 4 }}>
            <AlertTitle>Compromiso con la Privacidad</AlertTitle>
            PoolZapp está comprometido con la protección de sus datos personales y el cumplimiento del Reglamento General de Protección de Datos (GDPR) de la Unión Europea.
          </Alert>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              ¿Qué es el GDPR?
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              El Reglamento General de Protección de Datos (GDPR) es una ley de privacidad y seguridad de datos de la Unión Europea que entró en vigor el 25 de mayo de 2018. Establece reglas estrictas sobre cómo las organizaciones pueden recopilar, usar y almacenar datos personales de ciudadanos de la UE.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Nuestro Compromiso
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Aunque PoolZapp opera principalmente en México, reconocemos la importancia de la privacidad de datos a nivel global y hemos implementado medidas para cumplir con los estándares del GDPR:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Procesamiento transparente y legal de datos personales"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Implementación de medidas técnicas y organizativas apropiadas"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Respeto y facilitación de los derechos de los interesados"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Notificación oportuna de violaciones de datos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1D1D1F' }}>
              Sus Derechos bajo el GDPR
            </Typography>
            <Grid container spacing={3}>
              {rights.map((right, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card 
                    elevation={0} 
                    sx={{ 
                      height: '100%', 
                      border: '1px solid #E5E5EA',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {right.icon}
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: 600, color: '#1D1D1F' }}>
                          {right.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#424245', lineHeight: 1.5 }}>
                        {right.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Base Legal para el Procesamiento
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Procesamos sus datos personales basándonos en las siguientes bases legales del GDPR:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Consentimiento: Cuando usted nos ha dado su consentimiento específico"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Contrato: Cuando el procesamiento es necesario para cumplir un contrato"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Obligación legal: Cuando debemos procesar datos para cumplir con la ley"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Interés legítimo: Cuando tenemos un interés legítimo que no anula sus derechos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Transferencias Internacionales de Datos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Cuando transferimos datos personales fuera del Espacio Económico Europeo (EEE), nos aseguramos de que:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• La transferencia se realice a un país con decisión de adecuación de la Comisión Europea"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Se implementen salvaguardas apropiadas como Cláusulas Contractuales Estándar"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Se obtenga su consentimiento explícito cuando sea requerido"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Seguridad de los Datos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Implementamos medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, incluyendo:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Cifrado de datos personales en tránsito y en reposo"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Controles de acceso estrictos y autenticación multifactor"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Auditorías regulares de seguridad y evaluaciones de vulnerabilidad"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Capacitación continua del personal en protección de datos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Violaciones de Datos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              En caso de una violación de datos personales que pueda resultar en un alto riesgo para sus derechos y libertades, nos comprometemos a:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Notificar a la autoridad de supervisión competente dentro de 72 horas"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Informarle sin demora indebida sobre la violación"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Tomar medidas inmediatas para mitigar los riesgos"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Documentar la violación y las medidas tomadas"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Cómo Ejercer sus Derechos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Para ejercer cualquiera de sus derechos bajo el GDPR, puede:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Contactarnos directamente a través de gdpr@poolzapp.com"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Utilizar el formulario de solicitud de derechos en su panel de usuario"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• Llamar a nuestro número de atención al cliente: +52 (55) 1234-5678"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mt: 2 }}>
              Responderemos a su solicitud dentro de un mes, aunque este plazo puede extenderse a dos meses adicionales en casos complejos.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Derecho a Presentar una Queja
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6, mb: 2 }}>
              Si considera que hemos procesado sus datos personales de manera incorrecta, tiene derecho a presentar una queja ante:
            </Typography>
            <List sx={{ pl: 2 }}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• La autoridad de supervisión de protección de datos de su país de residencia"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText 
                  primary="• El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en México"
                  primaryTypographyProps={{ color: '#424245' }}
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1D1D1F' }}>
              Oficial de Protección de Datos
            </Typography>
            <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.6 }}>
              Para consultas relacionadas con GDPR y protección de datos, contáctenos:
              <br />
              <strong>Email:</strong> gdpr@poolzapp.com
              <br />
              <strong>Teléfono:</strong> +52 (55) 1234-5678
              <br />
              <strong>Dirección:</strong> Av. Reforma 123, Ciudad de México, México
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}