'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import RegisterForm from '../../components/auth/RegisterForm';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    // Redirect to dashboard after successful registration
    router.push('/dashboard');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <RegisterForm
        onSuccess={handleRegisterSuccess}
        onLoginClick={handleLoginClick}
      />
    </ProtectedRoute>
  );
}