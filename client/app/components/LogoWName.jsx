import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logowname from '../public/images/logo w name.png';

export default function LogoWName() {
    return (
        <Link href="/">
          <Image src={logowname} alt="Logo-w-name" height={75} width={150} />
        </Link>
    )
};