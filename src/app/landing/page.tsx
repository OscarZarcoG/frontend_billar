'use client';
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  
  return (
    <Box className="min-h-screen bg-background text-foreground transition-colors">
      <HeroSection />
      <ServicesSection />
      <Footer />
    </Box>
  );
}
