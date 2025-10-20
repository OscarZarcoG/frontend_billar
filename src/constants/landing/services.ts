import {
  TableBar,
  Restaurant,
  LocalBar,
  Analytics,
  Schedule,
  Payment,
  Group,
  TrendingUp,
} from '@mui/icons-material';

export const mainServices = [
  {
    icon: TableBar,
    title: 'Gestión de Mesas',
    description: 'Control completo del estado de todas las mesas de billar en tiempo real',
    features: ['Estado en tiempo real', 'Reservas automáticas', 'Historial de uso', 'Tarifas personalizables'],
    color: '#007AFF',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
  },
  {
    icon: Restaurant,
    title: 'Gestión de Alimentos',
    description: 'Sistema completo para el manejo de pedidos de comida y snacks',
    features: ['Menú digital', 'Pedidos por mesa', 'Control de inventario', 'Reportes de ventas'],
    color: '#FF9500',
    gradient: 'linear-gradient(135deg, #FF9500 0%, #FFCC02 100%)',
  },
  {
    icon: LocalBar,
    title: 'Gestión de Bebidas',
    description: 'Control de inventario y ventas de bebidas alcohólicas y no alcohólicas',
    features: ['Inventario automático', 'Control de stock', 'Precios dinámicos', 'Promociones'],
    color: '#34C759',
    gradient: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
  },
  {
    icon: Analytics,
    title: 'Análisis y Reportes',
    description: 'Reportes detallados y análisis de rendimiento del negocio',
    features: ['Dashboard en vivo', 'Reportes automáticos', 'Métricas clave', 'Exportar datos'],
    color: '#AF52DE',
    gradient: 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)',
  },
];

export const additionalFeatures = [
  {
    icon: Schedule,
    title: 'Reservas Inteligentes',
    description: 'Sistema automatizado de reservas',
  },
  {
    icon: Payment,
    title: 'Múltiples Formas de Pago',
    description: 'Acepta efectivo, tarjetas y pagos digitales',
  },
  {
    icon: Group,
    title: 'Gestión de Clientes',
    description: 'Base de datos de clientes con historial y preferencias',
  },
  {
    icon: TrendingUp,
    title: 'Optimización de Ingresos',
    description: 'Algoritmos para maximizar la ocupación y ganancias',
  },
];