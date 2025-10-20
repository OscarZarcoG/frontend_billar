'use client';

import React from 'react';
import { Box, Skeleton, Stack, Grid, Card, CardContent } from '@mui/material';

interface SkeletonLoaderProps {
  variant?: 'hero' | 'card' | 'list' | 'full';
  count?: number;
}

export default function SkeletonLoader({ variant = 'card', count = 1 }: SkeletonLoaderProps) {
  const renderHeroSkeleton = () => (
    <Box
      sx={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Skeleton
          variant="rectangular"
          width={120}
          height={120}
          sx={{
            borderRadius: '50%',
            mx: 'auto',
            mb: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Skeleton
          variant="text"
          width="60%"
          height={60}
          sx={{
            mx: 'auto',
            mb: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Skeleton
          variant="text"
          width="40%"
          height={30}
          sx={{
            mx: 'auto',
            mb: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Skeleton
            variant="rectangular"
            width={150}
            height={56}
            sx={{
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Skeleton
            variant="rectangular"
            width={150}
            height={56}
            sx={{
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          />
        </Stack>
      </Box>
    </Box>
  );

  const renderCardSkeleton = () => (
    <Grid container spacing={3}>
      {Array.from({ length: count }, (_, index) => (
        <Grid key={`skeleton-card-${index}`} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '0.5px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Skeleton
              variant="rectangular"
              height={200}
              sx={{
                backgroundColor: 'rgba(60, 60, 67, 0.1)',
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Skeleton
                variant="text"
                width="80%"
                height={32}
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="60%"
                height={24}
                sx={{ mb: 2 }}
              />
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={20}
                sx={{ mb: 3 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={44}
                sx={{ borderRadius: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderListSkeleton = () => (
    <Stack spacing={2}>
      {Array.from({ length: count }, (_, index) => (
        <Box
          key={`skeleton-list-${index}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 2,
            border: '0.5px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Skeleton
            variant="circular"
            width={48}
            height={48}
            sx={{ mr: 2 }}
          />
          <Box sx={{ flex: 1 }}>
            <Skeleton
              variant="text"
              width="70%"
              height={24}
              sx={{ mb: 1 }}
            />
            <Skeleton
              variant="text"
              width="50%"
              height={20}
            />
          </Box>
          <Skeleton
            variant="rectangular"
            width={80}
            height={32}
            sx={{ borderRadius: 1 }}
          />
        </Box>
      ))}
    </Stack>
  );

  const renderFullSkeleton = () => (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#F2F2F7' }}>
      {renderHeroSkeleton()}
      <Box sx={{ p: 4 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Skeleton
            variant="text"
            width="40%"
            height={48}
            sx={{ mx: 'auto', mb: 4 }}
          />
          {renderCardSkeleton()}
          <Box sx={{ mt: 6 }}>
            <Skeleton
              variant="text"
              width="30%"
              height={40}
              sx={{ mb: 3 }}
            />
            {renderListSkeleton()}
          </Box>
        </Box>
      </Box>
    </Box>
  );

  switch (variant) {
    case 'hero':
      return renderHeroSkeleton();
    case 'card':
      return renderCardSkeleton();
    case 'list':
      return renderListSkeleton();
    case 'full':
      return renderFullSkeleton();
    default:
      return renderCardSkeleton();
  }
}