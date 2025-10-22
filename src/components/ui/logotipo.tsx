import React from 'react';
import Image from 'next/image'
import Link from 'next/link';


export default function Logotipo() {
    return (
        <Link href="/landing" passHref>
            <Image
                src="/img/logotipo-vacio.png"
                alt="PoolZapp Logo"
                width={100}
                height={100}
                priority
            />
        </Link>
    );
}