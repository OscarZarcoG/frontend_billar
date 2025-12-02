'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { getRevealAnimation, getStaggerDelay } from 'utils/landing/interactiveAnimations';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'left' | 'right' | 'scale';
    delay?: number;
    staggerIndex?: number;
    threshold?: number;
    sx?: SxProps<Theme>;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    staggerIndex,
    threshold = 0.1,
    sx = {},
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const animationDelay = staggerIndex !== undefined
        ? getStaggerDelay(staggerIndex, delay)
        : `${delay}ms`;

    return (
        <Box
            ref={elementRef}
            sx={{
                opacity: isVisible ? 1 : 0,
                ...(isVisible && getRevealAnimation(direction, animationDelay)),
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};
