import React from 'react';
import Image from 'next/image';
import placeholder from '../public/images/placeholder.jpg';

export default function PlaceholderImage() {
    return (
        <Image className="w-full" src={placeholder} alt="Placeholder" priority={true} />
    );
};