'use client';
import React from 'react';
import { Box } from '@mui/material';
import SkeletonLoader from '@/components/landing/SkeletonLoader';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import Footer from '@/components/landing/Footer';
import { useLandingLoader } from 'hooks/landing/useLandingLoader';
import { AutoCarousel } from '@/components/landing/AutoCarousel';
import Image from 'next/image'

export default function LandingPage() {
  const { isLoading } = useLandingLoader({ loadingDelay: 100 });
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      <HeroSection />
      <ServicesSection />
      
      {/* Carrusel de imágenes 
      <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: '1400px', margin: '0 auto' }}>
        <AutoCarousel
          height={600}
          objectFit="cover"
          autoPlayInterval={3000}
        >
          <Image
            src="/img/pool1.jpg"
            alt="Piscina 1"
            fill
            style={{ objectFit: 'cover' }}
          />
          <Image
            src="/img/pool2.png"
            alt="Piscina 2"
            fill
            style={{ objectFit: 'cover' }}
          />
          <Image
            src="/img/pool4.png"
            alt="Piscina 4"
            fill
            style={{ objectFit: 'cover' }}
          />
          <Image
            src="/img/pool5.jpg"
            alt="Piscina 5"
            fill
            style={{ objectFit: 'cover' }}
          />
        </AutoCarousel>
      </Box>*/}
      
      <Footer />
    </Box>
  );
}