'use client';
import React from 'react';
import { Box } from '@mui/material';
import SkeletonLoader from '@/components/landing/SkeletonLoader';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import Footer from '@/components/landing/Footer';
import { useLandingLoader } from 'hooks/landing/useLandingLoader';
export default function LandingPage() {
  const { isLoading } = useLandingLoader({ loadingDelay: 100 });

  if (isLoading) {
    return <SkeletonLoader variant="full" count={3} />;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      <HeroSection />
      <ServicesSection />
      <Footer />
    </Box>
  );
}