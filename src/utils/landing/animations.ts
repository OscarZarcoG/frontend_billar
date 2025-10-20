export const floatAnimation = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const getFloatingElementStyles = (delay: string = '0s') => ({
  animation: `float 3s ease-in-out infinite ${delay}`,
});

export const getHoverTransformStyles = (translateY: string = '-8px') => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: `translateY(${translateY})`,
  },
});

export const getCardHoverStyles = (shadowColor: string = 'rgba(0, 0, 0, 0.1)') => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 60px ${shadowColor}`,
  },
});