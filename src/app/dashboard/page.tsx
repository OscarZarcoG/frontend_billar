'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Grid,
  Stack,
  Chip,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import {
  Logout,
  Person,
  Dashboard as DashboardIcon,
  SportsEsports,
  Schedule,
  Payment,
  Settings,
  Notifications,
  TrendingUp,
  Groups,
  TableBar,
  AccessTime,
  Apple,
  ChevronRight,
} from '@mui/icons-material';
import { authService } from '../../services/auth';

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
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

  const handleLogout = async () => {
    try {
      await authService.logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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

  const menuItems = [
    { icon: <DashboardIcon />, label: 'Dashboard', active: true },
    { icon: <TableBar />, label: 'Mesas de Billar', count: 8 },
    { icon: <Schedule />, label: 'Reservas', count: 12 },
    { icon: <Groups />, label: 'Clientes', count: 45 },
    { icon: <Payment />, label: 'Pagos', count: 3 },
    { icon: <TrendingUp />, label: 'Reportes' },
    { icon: <Settings />, label: 'Configuración' },
  ];

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
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F2F2F7' }}>
      {/* Sidebar */}
      <Paper
        elevation={0}
        sx={{
          width: 280,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRight: '0.5px solid rgba(60, 60, 67, 0.29)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo/Header */}
        <Box
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderBottom: '0.5px solid rgba(60, 60, 67, 0.29)',
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Apple sx={{ fontSize: 24, color: 'white' }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#1D1D1F',
              fontSize: '1.25rem',
            }}
          >
            Billar App
          </Typography>
        </Box>

        {/* User Profile */}
        <Box sx={{ p: 3, borderBottom: '0.5px solid rgba(60, 60, 67, 0.29)' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#007AFF',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              {user.first_name.charAt(0)}{user.last_name.charAt(0)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontSize: '1rem',
                  lineHeight: 1.2,
                }}
                noWrap
              >
                {user.first_name} {user.last_name}
              </Typography>
              <Chip
                label={user.role || 'Cliente'}
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(52, 199, 89, 0.1)',
                  color: '#34C759',
                  border: '1px solid rgba(52, 199, 89, 0.2)',
                  mt: 0.5,
                }}
              />
            </Box>
          </Stack>
        </Box>

        {/* Navigation Menu */}
        <Box sx={{ flex: 1, py: 2 }}>
          <List sx={{ px: 2 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 2,
                    backgroundColor: item.active ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: item.active ? 'rgba(0, 122, 255, 0.15)' : 'rgba(60, 60, 67, 0.08)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: item.active ? '#007AFF' : '#86868B',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '0.9375rem',
                        fontWeight: item.active ? 600 : 500,
                        color: item.active ? '#007AFF' : '#1D1D1F',
                      },
                    }}
                  />
                  {item.count && (
                    <Chip
                      label={item.count}
                      size="small"
                      sx={{
                        height: 20,
                        minWidth: 20,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#FF3B30',
                        color: 'white',
                      }}
                    />
                  )}
                  <ChevronRight sx={{ fontSize: 16, color: '#86868B', ml: 1 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Logout Button */}
        <Box sx={{ p: 2, borderTop: '0.5px solid rgba(60, 60, 67, 0.29)' }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{
              height: 44,
              borderRadius: 2,
              borderColor: 'rgba(255, 59, 48, 0.3)',
              color: '#FF3B30',
              backgroundColor: 'rgba(255, 59, 48, 0.05)',
              '&:hover': {
                backgroundColor: 'rgba(255, 59, 48, 0.1)',
                borderColor: '#FF3B30',
              },
            }}
          >
            Cerrar Sesión
          </Button>
        </Box>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '0.5px solid rgba(60, 60, 67, 0.29)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#1D1D1F',
                  fontSize: '1.5rem',
                }}
              >
                Dashboard
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#86868B',
                  fontSize: '0.9375rem',
                }}
              >
                Bienvenido de vuelta, {user.first_name}
              </Typography>
            </Box>
            <IconButton
              sx={{
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                color: '#007AFF',
                '&:hover': {
                  backgroundColor: 'rgba(0, 122, 255, 0.15)',
                },
              }}
            >
              <Notifications />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Container maxWidth="xl" sx={{ flex: 1, py: 4 }}>
          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {statsCards.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '0.5px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: `${stat.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: stat.color,
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#86868B',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {stat.title}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: '#1D1D1F',
                            fontSize: '1.75rem',
                            lineHeight: 1,
                            mb: 0.5,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: stat.color,
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                          }}
                        >
                          {stat.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Recent Activity */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1D1D1F',
                      fontSize: '1.125rem',
                      mb: 3,
                    }}
                  >
                    Actividad Reciente
                  </Typography>
                  <Stack spacing={2}>
                    {recentActivity.map((activity, index) => (
                      <Box key={index}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              backgroundColor: '#007AFF',
                              fontSize: '0.875rem',
                            }}
                          >
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                color: '#1D1D1F',
                                fontSize: '0.9375rem',
                              }}
                            >
                              {activity.action}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#86868B',
                                fontSize: '0.8125rem',
                              }}
                            >
                              {activity.user} • {activity.time}
                            </Typography>
                          </Box>
                        </Stack>
                        {index < recentActivity.length - 1 && (
                          <Divider sx={{ mt: 2, borderColor: 'rgba(60, 60, 67, 0.29)' }} />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1D1D1F',
                      fontSize: '1.125rem',
                      mb: 3,
                    }}
                  >
                    Acciones Rápidas
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<TableBar />}
                      sx={{
                        height: 48,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                        boxShadow: '0 4px 20px rgba(52, 199, 89, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #248A3D 0%, #34C759 100%)',
                        },
                      }}
                    >
                      Nueva Reserva
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<Payment />}
                      sx={{
                        height: 48,
                        borderRadius: 2,
                        borderColor: 'rgba(0, 122, 255, 0.3)',
                        color: '#007AFF',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          borderColor: '#007AFF',
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
      </Box>
    </Box>
  );
}