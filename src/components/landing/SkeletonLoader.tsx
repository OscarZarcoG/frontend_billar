'use client';

import React from 'react';
import { Box, Skeleton, Stack, Grid, Card, CardContent, Divider } from '@mui/material';
import { colors, getContainerMaxWidth } from 'utils/landing/styles';

interface SkeletonLoaderProps {
  variant?: 'hero' | 'card' | 'list' | 'form' | 'footer' | 'full';
  count?: number;
}

export default function SkeletonLoader({ variant = 'card', count = 9 }: SkeletonLoaderProps) {
  const renderHeroSkeleton = () => (
    <Box
      sx={{
        minHeight: '90vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          maxWidth: getContainerMaxWidth(),
          mx: 'auto',
        }}
      >
        <Skeleton
          variant="text"
          width={120}
          height={40}
          sx={{ bgcolor: 'rgba(255,255,255,0.15)' }}
        />

        <Stack direction="row" spacing={2}>
          <Skeleton
            variant="rectangular"
            width={80}
            height={44}
            sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.15)' }}
          />
          <Skeleton
            variant="rectangular"
            width={100}
            height={44}
            sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.25)' }}
          />
        </Stack>
      </Box>

      <Box sx={{ pt: 12, pb: 6, px: 4 }}>
        <Box sx={{ maxWidth: getContainerMaxWidth(), width: '100%', mx: 'auto' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ maxWidth: 600 }}>
                <Skeleton
                  variant="text"
                  width="90%"
                  height={80}
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="70%"
                  height={80}
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: 3 }}
                />

                <Skeleton
                  variant="text"
                  width="100%"
                  height={24}
                  sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="85%"
                  height={24}
                  sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 4 }}
                />

                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                  <Skeleton
                    variant="rectangular"
                    width={140}
                    height={52}
                    sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.25)' }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={140}
                    height={52}
                    sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.1)' }}
                  />
                </Stack>

                <Skeleton
                  variant="text"
                  width="40%"
                  height={20}
                  sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={380}
                  height={500}
                  sx={{
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.5)',
                    transform: 'perspective(1000px) rotateY(-12deg) rotateX(5deg)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
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

  const renderFormSkeleton = () => (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 450,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          p: 4,
        }}
      >
        <Skeleton
          variant="circular"
          width={80}
          height={80}
          sx={{ mx: 'auto', mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }}
        />
        <Skeleton
          variant="text"
          width="60%"
          height={40}
          sx={{ mx: 'auto', mb: 1, bgcolor: 'rgba(0, 0, 0, 0.1)' }}
        />
        <Skeleton
          variant="text"
          width="40%"
          height={24}
          sx={{ mx: 'auto', mb: 4, bgcolor: 'rgba(0, 0, 0, 0.1)' }}
        />

        <Stack spacing={3}>
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1, bgcolor: 'rgba(0, 0, 0, 0.05)' }} />
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1, bgcolor: 'rgba(0, 0, 0, 0.05)' }} />
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1, bgcolor: 'rgba(0, 0, 0, 0.05)' }} />
        </Stack>
      </Box>
    </Box>
  );

  const renderFooterSkeleton = () => (
    <Box sx={{ backgroundColor: colors.text || '#1D1D1F', py: 8, color: 'white' }}>
      <Box sx={{ maxWidth: getContainerMaxWidth(), mx: 'auto', px: 3 }}>
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Skeleton variant="circular" width={48} height={48} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
              <Skeleton variant="text" width={120} height={32} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            </Box>
            <Skeleton variant="text" width="80%" height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }} />
            <Skeleton variant="text" width="60%" height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={4}>
              {[1, 2, 3, 4].map((col) => (
                <Grid key={col} size={{ xs: 6, sm: 3 }}>
                  <Skeleton variant="text" width="60%" height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 2 }} />
                  <Stack spacing={1}>
                    {[1, 2, 3, 4].map((item) => (
                      <Skeleton key={item} variant="text" width="80%" height={20} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Skeleton variant="text" width={200} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Stack direction="row" spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} variant="circular" width={32} height={32} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );

  const renderFullSkeleton = () => (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'rgba(211, 208, 210, 0.8)' }}>
      {renderHeroSkeleton()}
      <Box sx={{ p: 4 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          {renderCardSkeleton()}
          <Box sx={{ mt: 6 }}>
            {renderListSkeleton()}
          </Box>
        </Box>
      </Box>
      {renderFooterSkeleton()}
    </Box>
  );

  switch (variant) {
    case 'hero':
      return renderHeroSkeleton();
    case 'card':
      return renderCardSkeleton();
    case 'list':
      return renderListSkeleton();
    case 'form':
      return renderFormSkeleton();
    case 'footer':
      return renderFooterSkeleton();
    case 'full':
      return renderFullSkeleton();
    default:
      return renderCardSkeleton();
  }
}
