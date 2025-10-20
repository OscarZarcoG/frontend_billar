import React from 'react';
import {
    Box,
} from '@mui/material';
import Image from 'next/image'


export default function Logotipo() {
    return (
        <Image
            src="/img/logotipo-vacio.png"
            alt="PoolZapp Logo"
            width={100}
            height={100}
            priority
        />
    );
}