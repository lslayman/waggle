'use client'

import React, { useEffect, useState } from 'react';
import PlaceholderImage from '@/components/Placeholder';

export default function FavoriteById({ params}) {
    const [favePet, setFavePet] = useState(null);

    useEffect(() => {
      fetch(`/api/external-pets/${params.id}`)
        .then(res => res.json())
        .then(data => setFavePet(data))    
    }, [])
    
    if(!favePet) {
      return <div>Loading...</div>
    }
    return (
        <div>
    {favePet ? (
      <>
        <h1>{favePet.animal.name}</h1>
        <p>Age: {favePet.animal.age}</p>
        <p>Gender: {favePet.animal.gender}</p>
        <p>Description: {favePet.animal.description}</p>
        <div>
          {favePet.animal.photos.map((photo, index) => (
            <img key={index} src={photo.medium} alt={`Photo ${index + 1}`} />
          ))}
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

    {/* {favePet.photos && favePet.photos.length > 0 ? (
      favePet.photos.map((photo, index) => (
        <Image 
          className="w-full"
          key={index}
          src={photo.medium}
          alt={`Photo ${index + 1}`}
          width={500}
          height={500}
        />
      ))
    ) : (
      <PlaceholderImage />
    )} */}
    
}