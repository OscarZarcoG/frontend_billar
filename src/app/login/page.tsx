'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Redirect to dashboard or home page after successful login
    router.push('/dashboard');
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <LoginForm
      onSuccess={handleLoginSuccess}
      onRegisterClick={handleRegisterClick}
    />
  );
}