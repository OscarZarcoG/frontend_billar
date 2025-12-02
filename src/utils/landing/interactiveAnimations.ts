// Interactive Animations for Landing Page
// Inspired by Antigravity and Trae.ai

export const particleAnimation = `
  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translate(10px, -10px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translate(-5px, -20px) rotate(180deg);
      opacity: 0.8;
    }
    75% {
      transform: translate(-15px, -10px) rotate(270deg);
      opacity: 0.6;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export const getParticleStyles = (size: number = 4, delay: string = '0s') => ({
    width: size,
    height: size,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute' as const,
    animation: `particleFloat 6s ease-in-out infinite ${delay}`,
    pointerEvents: 'none' as const,
});

export const getRevealAnimation = (direction: 'up' | 'left' | 'right' | 'scale' = 'up', delay: string = '0s') => ({
    animation: `fadeIn${direction === 'up' ? 'Up' : direction === 'left' ? 'Left' : direction === 'right' ? 'Right' : ''} ${direction === 'scale' ? 'scaleIn' : ''} 0.8s ease-out ${delay} both`,
});

export const getShimmerEffect = () => ({
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    backgroundSize: '1000px 100%',
    animation: 'shimmer 2s infinite',
});

export const getGradientAnimation = () => ({
    backgroundSize: '200% 200%',
    animation: 'gradientShift 8s ease infinite',
});

export const getPulseAnimation = (delay: string = '0s') => ({
    animation: `pulse 2s ease-in-out infinite ${delay}`,
});

export const getHoverGlowEffect = (color: string = 'rgba(52, 199, 89, 0.5)') => ({
    position: 'relative' as const,
    transition: 'all 0.3s ease',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        background: `radial-gradient(circle at center, ${color}, transparent)`,
        filter: 'blur(20px)',
        zIndex: -1,
    },
    '&:hover::before': {
        opacity: 1,
    },
    '&:hover': {
        transform: 'translateY(-4px)',
    },
});

export const getMagneticEffect = () => ({
    transition: 'transform 0.2s ease-out',
    cursor: 'pointer',
});

export const getParallaxStyles = (speed: number = 0.5) => ({
    transform: `translateY(calc(var(--scroll-y, 0) * ${speed}px))`,
    transition: 'transform 0.1s ease-out',
});

export const getCardTiltEffect = () => ({
    transformStyle: 'preserve-3d' as const,
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))',
    },
});

export const getTextGradientAnimation = (colors: string[] = ['#34C759', '#30D158', '#00D4FF']) => ({
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradientShift 3s ease infinite',
});

export const getRippleEffect = () => ({
    position: 'relative' as const,
    overflow: 'hidden' as const,
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '5px',
        height: '5px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
    },
    '&:active::after': {
        animation: 'ripple 0.6s ease-out',
    },
});

export const getScrollRevealConfig = () => ({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
});

export const getStaggerDelay = (index: number, baseDelay: number = 100) => `${index * baseDelay}ms`;
