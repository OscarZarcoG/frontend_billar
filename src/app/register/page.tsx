'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    // Redirect to dashboard or home page after successful registration
    router.push('/dashboard');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <RegisterForm
      onSuccess={handleRegisterSuccess}
      onLoginClick={handleLoginClick}
    />
  );
}