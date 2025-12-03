'use client';

import React, { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import { Box, IconButton, SxProps, Theme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface AutoCarouselProps {
    children: ReactNode[];
    autoPlayInterval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
    pauseOnHover?: boolean;
    transitionDuration?: number;
    sx?: SxProps<Theme>;
    height?: string | number;
    objectFit?: 'cover' | 'contain' | 'fill';
}

export const AutoCarousel: React.FC<AutoCarouselProps> = ({
    children,
    autoPlayInterval = 2000,
    showControls = true,
    showIndicators = true,
    pauseOnHover = true,
    transitionDuration = 500,
    sx = {},
    height = 500,
    objectFit = 'cover',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const itemCount = React.Children.count(children);

    const goToSlide = (index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), transitionDuration);
    };

    const goToNext = useCallback(() => {
        goToSlide((currentIndex + 1) % itemCount);
    }, [currentIndex, itemCount, goToSlide]);

    const goToPrevious = () => {
        goToSlide((currentIndex - 1 + itemCount) % itemCount);
    };

    useEffect(() => {
        if (!isPaused && autoPlayInterval > 0) {
            timeoutRef.current = setTimeout(goToNext, autoPlayInterval);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, isPaused, autoPlayInterval, goToNext]);

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    };

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                width: '100%',
                height: height,
                overflow: 'hidden',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                ...sx,
            }}
        >
            {/* Slides Container */}
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                    transition: `transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            '& img': {
                                width: '100%',
                                height: '100%',
                                objectFit: objectFit,
                                objectPosition: 'center',
                            },
                            '& > *': {
                                width: '100%',
                                height: '100%',
                            }
                        }}
                    >
                        {child}
                    </Box>
                ))}
            </Box>

            {/* Navigation Controls */}
            {showControls && itemCount > 1 && (
                <>
                    <IconButton
                        onClick={goToPrevious}
                        disabled={isTransitioning}
                        sx={{
                            position: 'absolute',
                            left: { xs: 8, md: 16 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            zIndex: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                            '&:disabled': {
                                opacity: 0.3,
                            },
                        }}
                    >
                        <ChevronLeft />
                    </IconButton>

                    <IconButton
                        onClick={goToNext}
                        disabled={isTransitioning}
                        sx={{
                            position: 'absolute',
                            right: { xs: 8, md: 16 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            zIndex: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                            '&:disabled': {
                                opacity: 0.3,
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </>
            )}

            {/* Indicators */}
            {showIndicators && itemCount > 1 && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                        zIndex: 2,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 10,
                        padding: '8px 12px',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {Array.from({ length: itemCount }).map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => !isTransitioning && goToSlide(index)}
                            sx={{
                                width: currentIndex === index ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: currentIndex === index
                                    ? 'rgba(255, 255, 255, 0.9)'
                                    : 'rgba(255, 255, 255, 0.4)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                },
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};
