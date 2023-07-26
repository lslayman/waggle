'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('/api/favorites')
          .then(res => res.json())
          .then(data => setFavorites(data))
    }, []);

    return (
      <>
        <div>
          <h1>Favorite Pets</h1>
          <ul>
            {favorites.map((favorite) => (
                <li key={favorite.id}>{favorite.pet_id}</li>
            ))}
          </ul>
        </div>
      </>
    );
}