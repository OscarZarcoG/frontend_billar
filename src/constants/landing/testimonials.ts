// Function to get testimonials with translations
export const getTestimonials = (t: (key: string) => string) => [
  {
    name: t('services.testimonials.carlos_mendoza.name'),
    business: t('services.testimonials.carlos_mendoza.business'),
    rating: 5,
    comment: t('services.testimonials.carlos_mendoza.comment'),
    avatar: 'CM',
  },
  {
    name: t('services.testimonials.ana_garcia.name'),
    business: t('services.testimonials.ana_garcia.business'),
    rating: 5,
    comment: t('services.testimonials.ana_garcia.comment'),
    avatar: 'AG',
  },
  {
    name: t('services.testimonials.roberto_silva.name'),
    business: t('services.testimonials.roberto_silva.business'),
    rating: 5,
    comment: t('services.testimonials.roberto_silva.comment'),
    avatar: 'RS',
  },
];

// Legacy export for backward compatibility (deprecated)
export const testimonials = [
  {
    name: 'Carlos Mendoza',
    business: 'Billar Club Premium',
    rating: 5,
    comment: 'Increíble sistema. Nuestras ventas aumentaron 40% en el primer mes.',
    avatar: 'CM',
  },
  {
    name: 'Ana García',
    business: 'Pool House Central',
    rating: 5,
    comment: 'La gestión de mesas nunca fue tan fácil. Altamente recomendado.',
    avatar: 'AG',
  },
  {
    name: 'Roberto Silva',
    business: 'Billar & Más',
    rating: 5,
    comment: 'El sistema de reportes nos ayudó a optimizar completamente el negocio.',
    avatar: 'RS',
  },
];