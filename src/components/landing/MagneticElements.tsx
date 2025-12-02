'use client';

import React, { useRef, useState, ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface MagneticButtonProps {
    children: ReactNode;
    strength?: number;
    sx?: SxProps<Theme>;
    onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    strength = 0.3,
    sx = {},
    onClick,
}) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <Box
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            sx={{
                display: 'inline-block',
                cursor: 'pointer',
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: `translate(${position.x}px, ${position.y}px)`,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};
