'use client';

import SkeletonLoader from '@/components/landing/SkeletonLoader';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en';

export interface TranslationData {
  [key: string]: string | string[] | TranslationData;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: TranslationData;
  t: (key: string, fallback?: string) => string;
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const loadTranslations = async (language: Language): Promise<TranslationData> => {
  try {
    const translations = await import(`../../language/${language}.json`);
    return translations.default || translations;
  } catch (error) {
    console.error(`Error loading translations for ${language}:`, error);
    if (language !== 'es') {
      try {
        const fallbackTranslations = await import('../../language/es.json');
        return fallbackTranslations.default || fallbackTranslations;
      } catch (fallbackError) {
        console.error('Error loading fallback translations:', fallbackError);
        return {};
      }
    }
    return {};
  }
};

const getNestedTranslation = (obj: TranslationData, path: string): string | undefined => {
  const result = path.split('.').reduce<string | string[] | TranslationData | undefined>((current, key) => {
    if (current && typeof current === 'object' && !Array.isArray(current) && current[key] !== undefined) {
      return current[key];
    }
    return undefined;
  }, obj);
  
  return typeof result === 'string' ? result : undefined;
};

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'es' 
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<TranslationData>({});
  const [isLoading, setIsLoading] = useState(true);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key: string, fallback?: string): string => {
    const translation = getNestedTranslation(translations, key);
    
    if (translation !== undefined) {
      return typeof translation === 'string' ? translation : String(translation);
    }
    
    return fallback || key;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage);
      } else {
        const browserLanguage = navigator.language.toLowerCase();
        if (browserLanguage.startsWith('en')) {
          setLanguageState('en');
        } else {
          setLanguageState('es');
        }
      }
    }
  }, []);

  useEffect(() => {
    const loadLanguageData = async () => {
      setIsLoading(true);
      try {
        const translationData = await loadTranslations(language);
        setTranslations(translationData);
      } catch (error) {
        console.error('Error loading language data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageData();
  }, [language]);

  if (isLoading) {
    return (
      <SkeletonLoader variant="full" count={3} />
    );
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    translations,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;