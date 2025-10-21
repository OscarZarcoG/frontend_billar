'use client';

import { useLanguage } from '../../contexts/language/LanguageContext';
import type { Language } from '../../contexts/language/LanguageContext';

export const useTranslation = () => {
  const { language, setLanguage, translations, t } = useLanguage();

  /**
   * Función de traducción con soporte para interpolación básica
   * @param key - Clave de traducción usando dot notation (ej: "common.login")
   * @param params - Parámetros para interpolación (opcional)
   * @param fallback - Texto de respaldo si no se encuentra la traducción
   * @returns Texto traducido
   */
  const translate = (
    key: string, 
    params?: Record<string, string | number>, 
    fallback?: string
  ): string => {
    let translation = t(key, fallback);

    // Interpolación básica de parámetros
    if (params && typeof translation === 'string') {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        const placeholder = `{{${paramKey}}}`;
        translation = translation.replace(new RegExp(placeholder, 'g'), String(paramValue));
      });
    }

    return translation;
  };

  /**
   * Función para obtener múltiples traducciones de una vez
   * @param keys - Array de claves de traducción
   * @returns Objeto con las traducciones
   */
  const translateMultiple = (keys: string[]): Record<string, string> => {
    const result: Record<string, string> = {};
    keys.forEach(key => {
      result[key] = t(key);
    });
    return result;
  };

  /**
   * Función para verificar si una traducción existe
   * @param key - Clave de traducción
   * @returns true si la traducción existe
   */
  const hasTranslation = (key: string): boolean => {
    const translation = t(key, '__NOT_FOUND__');
    return translation !== '__NOT_FOUND__' && translation !== key;
  };

  /**
   * Función para cambiar idioma con validación
   * @param newLanguage - Nuevo idioma a establecer
   */
  const changeLanguage = (newLanguage: Language): void => {
    if (newLanguage === 'es' || newLanguage === 'en') {
      setLanguage(newLanguage);
    } else {
      console.warn(`Idioma no soportado: ${newLanguage}. Usando español como fallback.`);
      setLanguage('es');
    }
  };

  /**
   * Función para obtener el idioma opuesto al actual
   * @returns El idioma opuesto
   */
  const getOppositeLanguage = (): Language => {
    return language === 'es' ? 'en' : 'es';
  };

  /**
   * Función para alternar entre idiomas
   */
  const toggleLanguage = (): void => {
    changeLanguage(getOppositeLanguage());
  };

  /**
   * Función para obtener el nombre del idioma actual en su propio idioma
   * @returns Nombre del idioma
   */
  const getCurrentLanguageName = (): string => {
    return language === 'es' ? 'Español' : 'English';
  };

  /**
   * Función para obtener información sobre todos los idiomas disponibles
   * @returns Array con información de idiomas
   */
  const getAvailableLanguages = () => [
    { code: 'es', name: 'Español', nativeName: 'Español' },
    { code: 'en', name: 'English', nativeName: 'English' }
  ];

  return {
    // Estado actual
    language,
    translations,
    
    // Funciones de traducción
    t: translate,
    translate,
    translateMultiple,
    hasTranslation,
    
    // Funciones de cambio de idioma
    setLanguage: changeLanguage,
    changeLanguage,
    toggleLanguage,
    getOppositeLanguage,
    
    // Utilidades
    getCurrentLanguageName,
    getAvailableLanguages,
    
    // Información del estado
    isSpanish: language === 'es',
    isEnglish: language === 'en',
  };
};

export default useTranslation;