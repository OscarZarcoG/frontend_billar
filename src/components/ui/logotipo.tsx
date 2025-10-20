import React from 'react';
import {
    Box,
} from '@mui/material';
import Image from 'next/image'


export default function Logotipo() {
    return (
        <Box
            sx={{
                width: 100,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                boxShadow: '0 10px 20px rgba(0, 122, 255, 0.2)',
            }}
        >
            <Image
                src="/img/logotipo-vacio.png"
                alt="PoolZapp Logo"
                width={100}
                height={100}
                priority
            />
        </Box>
    );
}