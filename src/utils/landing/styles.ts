export const gradientBackgrounds = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  blue: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
  orange: 'linear-gradient(135deg, #FF9500 0%, #FFCC02 100%)',
  green: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
  purple: 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)',
  cta: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

export const colors = {
  primary: '#007AFF',
  secondary: '#86868B',
  text: '#1D1D1F',
  background: '#F5F5F7',
  white: '#FFFFFF',
  dark: '#1D1D1F',
};

export const getGlassEffect = (opacity: number = 0.95) => ({
  backgroundColor: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: 'blur(20px)',
  border: '0.5px solid rgba(255, 255, 255, 0.2)',
});

export const getSectionPadding = () => ({
  py: 8,
});

export const getContainerMaxWidth = () => 'xl';

export const getButtonStyles = (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
  const baseStyles = {
    height: 56,
    px: 4,
    fontSize: '1.0625rem',
    fontWeight: 600,
    borderRadius: 2,
  };

  switch (variant) {
    case 'primary':
      return {
        ...baseStyles,
        background: gradientBackgrounds.blue,
        boxShadow: '0 8px 32px rgba(0, 122, 255, 0.4)',
        '&:hover': {
          background: 'linear-gradient(135deg, #0051D5 0%, #007AFF 100%)',
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 40px rgba(0, 122, 255, 0.5)',
        },
      };
    case 'secondary':
      return {
        ...baseStyles,
        background: gradientBackgrounds.green,
        boxShadow: '0 4px 20px rgba(52, 199, 89, 0.3)',
        '&:hover': {
          background: 'linear-gradient(135deg, #248A3D 0%, #34C759 100%)',
        },
      };
    case 'outline':
      return {
        ...baseStyles,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          transform: 'translateY(-2px)',
        },
      };
    default:
      return baseStyles;
  }
};