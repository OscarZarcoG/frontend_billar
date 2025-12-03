'use client';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';


export default function Logotipo() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const hasDark = root.classList.contains('dark');
      setIsDark(hasDark);
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => {
        const manual = localStorage.getItem('theme');
        if (!manual) setIsDark(mql.matches);
      };
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
  }, []);

  return (
    <Link href="/landing" passHref>
      <Image
        src="/img/logotipo-vacio.png"
        alt="PoolZapp Logo"
        width={100}
        height={100}
        priority
        style={{
          borderRadius: '50%',
          padding: 8,
          backgroundColor: 'var(--color-overlay)',
          border: '0.5px solid var(--color-glass-border)',
          boxShadow: isDark ? '0 6px 24px rgba(0,0,0,0.3)' : '0 6px 24px rgba(0,0,0,0.15)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </Link>
  );
}
