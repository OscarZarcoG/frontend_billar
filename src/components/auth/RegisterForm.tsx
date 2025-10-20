'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  Stack,
  Divider,
  Grid,
  MenuItem,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
  Phone,
  Cake,
  Apple,
} from '@mui/icons-material';
import { authService } from '../../services/auth';
import Logotipo from '../ui/logotipo';  

const schema = yup.object({
  username: yup
    .string()
    .required('El nombre de usuario es requerido')
    .min(3, 'Mínimo 3 caracteres'),
  first_name: yup.string().required('El nombre es requerido'),
  last_name: yup.string().required('El apellido es requerido'),
  email: yup
    .string()
    .email('Email inválido')
    .required('El email es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(8, 'Mínimo 8 caracteres'),
  password_confirm: yup
    .string()
    .required('Confirma tu contraseña')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  phone: yup.string().optional(),
  birthday: yup.string().optional(),
  gender: yup.string().optional(),
  role: yup.string().required('Selecciona un rol'),
});

interface RegisterFormData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
  phone?: string;
  birthday?: string;
  gender?: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess: () => void;
  onLoginClick: () => void;
}

export default function RegisterForm({ onSuccess, onLoginClick }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.register(data);
      // Store the authentication data
      authService.storeAuthData(response.token, response.user);
      onSuccess();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: 'center',
            pt: 6,
            pb: 4,
            px: 4,
          }}
        >
          <Logotipo />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1D1D1F',
              mb: 1,
              fontSize: '1.75rem',
            }}
          >
            Crear Cuenta
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#86868B',
              fontSize: '1.0625rem',
            }}
          >
            Únete a nuestra comunidad
          </Typography>
        </Box>

        {/* Form */}
        <Box sx={{ px: 4, pb: 6 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              {error && (
                <Alert
                  severity="error"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 59, 48, 0.1)',
                    border: '1px solid rgba(255, 59, 48, 0.2)',
                    '& .MuiAlert-icon': {
                      color: '#FF3B30',
                    },
                  }}
                >
                  {error}
                </Alert>
              )}

              {/* Personal Information */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontSize: '1.125rem',
                  mt: 2,
                }}
              >
                Información Personal
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('first_name')}
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    error={!!errors.first_name}
                    helperText={errors.first_name?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: '#86868B' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('last_name')}
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    error={!!errors.last_name}
                    helperText={errors.last_name?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <TextField
                {...register('username')}
                label="Nombre de Usuario"
                variant="outlined"
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: '#86868B' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    fontSize: '1.0625rem',
                  },
                }}
              />

              <TextField
                {...register('email')}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#86868B' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    fontSize: '1.0625rem',
                  },
                }}
              />

              {/* Account Security */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontSize: '1.125rem',
                  mt: 2,
                }}
              >
                Seguridad de la Cuenta
              </Typography>

              <TextField
                {...register('password')}
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#86868B' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: '#86868B' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    fontSize: '1.0625rem',
                  },
                }}
              />

              <TextField
                {...register('password_confirm')}
                label="Confirmar Contraseña"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                error={!!errors.password_confirm}
                helperText={errors.password_confirm?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#86868B' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                        sx={{ color: '#86868B' }}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    fontSize: '1.0625rem',
                  },
                }}
              />

              {/* Additional Information */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontSize: '1.125rem',
                  mt: 2,
                }}
              >
                Información Adicional
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('phone')}
                    label="Teléfono (Opcional)"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone sx={{ color: '#86868B' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('birthday')}
                    label="Fecha de Nacimiento"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.birthday}
                    helperText={errors.birthday?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Cake sx={{ color: '#86868B' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('gender')}
                    label="Género"
                    select
                    variant="outlined"
                    fullWidth
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  >
                    <MenuItem value="M">Masculino</MenuItem>
                    <MenuItem value="F">Femenino</MenuItem>
                    <MenuItem value="O">Otro</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('role')}
                    label="Rol"
                    select
                    variant="outlined"
                    fullWidth
                    error={!!errors.role}
                    helperText={errors.role?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        fontSize: '1.0625rem',
                      },
                    }}
                  >
                    <MenuItem value="cliente">Cliente</MenuItem>
                    <MenuItem value="empleado">Empleado</MenuItem>
                    <MenuItem value="administrador">Administrador</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{
                  height: 56,
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                  boxShadow: '0 4px 20px rgba(52, 199, 89, 0.3)',
                  mt: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #248A3D 0%, #34C759 100%)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 25px rgba(52, 199, 89, 0.4)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                  '&:disabled': {
                    background: '#86868B',
                    color: 'white',
                  },
                }}
              >
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              </Button>

              <Divider
                sx={{
                  my: 2,
                  '&::before, &::after': {
                    borderColor: 'rgba(60, 60, 67, 0.29)',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#86868B',
                    px: 2,
                  }}
                >
                  o
                </Typography>
              </Divider>

              <Button
                variant="outlined"
                fullWidth
                onClick={onLoginClick}
                sx={{
                  height: 56,
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  borderColor: 'rgba(60, 60, 67, 0.29)',
                  color: '#007AFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#007AFF',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Ya tengo cuenta
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}