//this is the home page
'use client'

import React, { useEffect, useState } from 'react';
import PetCard from './components/PetCard';

export default function Home({ }) {
  const [petData, setPetData] = useState(null)

  useEffect(() => {
    fetch('/api/external-pets')
      .then(res => res.json())
      .then(data => setPetData(data))
    // .catch(error => {
    //   console.error(error);
    // });
  }, [])

  
  if(!petData) {
    return <div>Loading...</div>
  }



  // const pets = [
  //   {
  //       id: 1,
  //       name: 'Belle',
  //       photo: 'https://cdn.britannica.com/55/236455-050-58F1F4FD/Bichon-frise-dog.jpg?w=300',
  //       breed: 'Bichon Frise mix',
  //       location: 'Denver, CO',
  //       organization: 'Weld Co Humane Society',
  //       age: 'Adult',
  //       gender: 'Female',
  //       size: 'Small',
  //       color: 'White',
  //       house_trained: 'Yes',
  //       vaccinations: 'Vaccinations up to date',
  //       spayed_neutered: 'spayed / neutered',
  //       description: 'Just the best',
  //       coat_length: 'Medium',
  //       adoption_fee: 'Absolutely not.'
  //   },
    // {
    //     id: 2,
    //     name: 'Louis Jadot Beaujolais',
    //     photo: 'img.jpg',
    //     breed: 'American Shorthair',
    //     location: 'Denver, CO',
    //     organization: 'Dumb Friends League',
    //     age: 'Senior',
    //     gender: 'Male',
    //     size: 'Small',
    //     color: 'Tuxedo',
    //     house_trained: 'Yes',
    //     vaccinations: 'Vaccinations up to date',
    //     spayed_neutured: 'spayed / neutered',
    //     description: 'Literally the love of my life',
    //     coat_length: 'short',
    //     adoption_fee: 'Don't you dare.'
    // }
// ];

  return (
    <>
    <div className="home">
        {petData.animals.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
    </div>
    </>
  );
}