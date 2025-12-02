'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/auth/LoginForm';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/dashboard');
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <LoginForm
        onSuccess={handleLoginSuccess}
        onRegisterClick={handleRegisterClick}
      />
    </ProtectedRoute>
  );
}