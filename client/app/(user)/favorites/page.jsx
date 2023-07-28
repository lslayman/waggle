'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('/api/favorites')
          .then(res => res.json())
          .then(data => setFavorites(data))
    }, []);

    return (
      <div>
          <h1>Favorite Pets (click ID number below)</h1>
          <ul>
            {favorites.map((favorite) => (
                <li key={favorite.id}>
                  <Link href={`/favorites/${favorite.pet_id}`}>{favorite.pet_id}</Link>
                </li>
            ))}
          </ul>
      </div>
    );
}