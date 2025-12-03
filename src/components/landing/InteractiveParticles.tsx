'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
}

interface InteractiveParticlesProps {
    count?: number;
    color?: string;
    maxSize?: number;
    speed?: number;
    interactive?: boolean;
}

export const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({
    count = 500,
    color = 'rgba(255, 255, 255, 0.5)',
    maxSize = 5,
    speed = 10,
    interactive = true,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            size: Math.random() * maxSize + 1,
            opacity: Math.random() * 0.5 + 0.2,
        }));

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        if (interactive) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Interactive effect - particles move away from cursor
                if (interactive) {
                    const dx = mouseRef.current.x - particle.x;
                    const dy = mouseRef.current.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        particle.vx -= (dx / distance) * force * 0.5;
                        particle.vy -= (dy / distance) * force * 0.5;
                    }
                }

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Keep minimum speed
                if (Math.abs(particle.vx) < 0.1) particle.vx = (Math.random() - 0.5) * speed;
                if (Math.abs(particle.vy) < 0.1) particle.vy = (Math.random() - 0.5) * speed;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${particle.opacity})`);
                ctx.fill();

                // Draw connections
                particlesRef.current.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = color.replace(/[\d.]+\)$/g, `${(1 - distance / 100) * 0.2})`);
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (interactive) {
                window.removeEventListener('mousemove', handleMouseMove);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [count, color, maxSize, speed, interactive]);

    return (
        <Box
            component="canvas"
            ref={canvasRef}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};
