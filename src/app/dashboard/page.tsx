'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Schedule,
  Payment,
  TrendingUp,
  TableBar,
  AccessTime,
} from '@mui/icons-material';
import { authService } from '../../services/auth';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import MainNavigation from '../../components/navigation/MainNavigation';

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!authService.isAuthenticated()) {
          router.push('/login');
          return;
        }
        const currentUser = authService.getStoredUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error checking authentication:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);


  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Cargando...
        </Typography>
      </Box>
    );
  }

  if (!user) {
    return null;
  }

  const statsCards = [
    {
      title: 'Mesas Activas',
      value: '6/8',
      subtitle: '75% ocupación',
      color: '#34C759',
      icon: <TableBar />,
    },
    {
      title: 'Ingresos Hoy',
      value: '$1,250',
      subtitle: '+15% vs ayer',
      color: '#007AFF',
      icon: <Payment />,
    },
    {
      title: 'Reservas Hoy',
      value: '12',
      subtitle: '3 pendientes',
      color: '#FF9500',
      icon: <Schedule />,
    },
    {
      title: 'Tiempo Promedio',
      value: '2.5h',
      subtitle: 'por sesión',
      color: '#AF52DE',
      icon: <AccessTime />,
    },
  ];

  const recentActivity = [
    { action: 'Mesa 3 liberada', time: 'Hace 5 min', user: 'Juan Pérez' },
    { action: 'Nueva reserva', time: 'Hace 12 min', user: 'María García' },
    { action: 'Pago recibido', time: 'Hace 18 min', user: 'Carlos López' },
    { action: 'Mesa 7 ocupada', time: 'Hace 25 min', user: 'Ana Martín' },
  ];

  return (
    <ProtectedRoute>
      <MainNavigation>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            Dashboard
          </Typography>
          
          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {statsCards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '0.5px solid rgba(60, 60, 67, 0.29)',
                    borderRadius: 3,
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: `${card.color}20`,
                          color: card.color,
                          mr: 2,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {card.value}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Recent Activity and Quick Actions */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(60, 60, 67, 0.29)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Actividad Reciente
                  </Typography>
                  <List>
                    {recentActivity.map((activity, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: '#34C759',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={activity.action}
                          secondary={`${activity.user} • ${activity.time}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(60, 60, 67, 0.29)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Acciones Rápidas
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<Payment />}
                      sx={{
                        height: 48,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                        },
                      }}
                    >
                      Registrar Pago
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<TrendingUp />}
                      sx={{
                        height: 48,
                        borderRadius: 2,
                        borderColor: 'rgba(175, 82, 222, 0.3)',
                        color: '#AF52DE',
                        '&:hover': {
                          backgroundColor: 'rgba(175, 82, 222, 0.1)',
                          borderColor: '#AF52DE',
                        },
                      }}
                    >
                      Ver Reportes
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MainNavigation>
    </ProtectedRoute>
  );
}