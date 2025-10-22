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
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Lock,
} from '@mui/icons-material';
import { authService } from '../../services/auth';
import Logotipo from '../ui/logotipo';

const schema = yup.object({
  username: yup.string().required('El nombre de usuario es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSuccess: () => void;
  onRegisterClick: () => void;
}

export default function LoginForm({ onSuccess, onRegisterClick }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.login(data);
      // Store the authentication data
      authService.storeAuthData(response.token, response.user);
      onSuccess();
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Error al iniciar sesión');
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
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            pt: 6,
            pb: 4,
            px: 4,
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 122, 255, 0.1)',
              boxShadow: '0 10px 20px rgba(0, 122, 255, 0.2)',
            }}
          >
            <Logotipo />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1D1D1F',
              mb: 1,
              fontSize: '1.75rem',
            }}
          >
            Bienvenido
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#86868B',
              fontSize: '1.0625rem',
            }}
          >
            Inicia sesión en tu cuenta
          </Typography>
        </Box>

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

              <TextField
                {...register('username')}
                label="Usuario o Email"
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
                  background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                  boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0051D5 0%, #007AFF 100%)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 25px rgba(0, 122, 255, 0.4)',
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
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
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
                onClick={onRegisterClick}
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
                Crear cuenta nueva
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}