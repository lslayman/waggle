'use client'

import Image from 'next/image'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown, faHeart, faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import PlaceholderImage from './Placeholder';

export default function PetCard({ pet }) {
    const [isPreview, setIsPreview] = useState(true)
    const [orgName, setOrgName] = useState('');
    const [isFavorite, setIsFavorite] = useState(false)

    console.log(pet)

    useEffect(() => {
      const fetchOrgName = async () => {
        try {
          const response = await axios.get(`/api/organizations/${petData.organization_id}`);
          const orgData = response.data;
          setOrgName(orgData.name);
        } catch (error) {
          console.error('Error fetching organization:', error);
        }
      };
      fetchOrgName();
    }, [pet.organization_id])

    const toggleCardView = () => {
        setIsPreview(!isPreview)
    }

    function handleAddToFavorites(){
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);

      const formData = new FormData();
      formData.append('pet_id', pet.id);
      formData.append('user_id', user.id)

      fetch('/api/favorites', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JformData,
      })
      .then(res => res.json())
      .then(data => setIsFavorite(data))
    }

    return (
        <>
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded overflow-hidden shadow-lg">
              {isPreview ? (
                //Render card preview
                <>
                  <div className="relative">
                  {pet.photos && pet.photos.length > 0 ? (
                      pet.photos.map((photo, index) => (
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
                    )}
                    <button onClick={toggleCardView} className="absolute right-8 transform -translate-y-1/2 -transition-transform hover:scale-110">
                        <FontAwesomeIcon
                          style={{color: "gold" }}
                          icon={faCircleUp}
                          size="xl"
                        />
                    </button>
                  </div>
                  <div className="content flex-2 p-4 bg-white text-gray-500">
                    <h2 className="name text-2xl font-bold">{pet.name}</h2>
                      <span className="text-sm">
                        {pet.breeds && pet.breeds.primary && (
                          <p>{pet.breeds.primary}</p>
                        )}
                        <p>{orgName} • {pet.location}</p>
                      </span>
                  </div>
                  <div className="flex justify-center">
                    <FontAwesomeIcon style={{color: "red"}} icon={faXmark} size="2x"/>
                    <button onClick={handleAddToFavorites}>
                      <FontAwesomeIcon style={{color: "gold"}} icon={faStar} size="xl"/>
                    </button>
                    <FontAwesomeIcon style={{color: "green"}} icon={faHeart} size="2x"/>
                  </div>
                </>
              ) : (
                //Render full card
                  <>
                    <div className="relative">

                    {pet.photos && pet.photos.length > 0 ? (
                      pet.photos.map((photo, index) => (
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
                    )}
                      <button onClick={toggleCardView} className="absolute right-8 transform -translate-y-1/2 -transition-transform hover:scale-110">
                        <FontAwesomeIcon
                          style={{color: "gold" }}
                          icon={faCircleDown}
                          size="2x"
                        />
                      </button>
                    </div>
                    <div className="content flex-2 p-4 bg-white text-gray-500">
                      <h2 className="name text-2xl font-bold">{pet.name}</h2>
                        <span className="text-sm">
                        {pet.breeds && pet.breeds.primary && (
                          <p>{pet.breeds.primary}</p>
                        )}
                        <p>{orgName} • {pet.location}</p>
                          <br />
                          <p>{pet.age} • {pet.gender} • {pet.size} • {pet.colors.primary}</p>
                        </span>
                        <hr className="my-2 border-gray-300" />
                        <h3 className="font-bold">About</h3>
                        {/* this section will also have characteristics, good in a home with, etc (if on pet's profile) */}
                        <br />
                        <span className="text-sm">
                          <h3 className="uppercase">Coat Length</h3>
                          <p>{pet.coat}</p>
                          <br />
                          <h3 className="uppercase"> House-Trained</h3>
                          <p>{pet.attributes.house_trained}</p>
                          <br />
                          <h3 className="uppercase">Health</h3>
                          <p>{pet.attributes.shots_current}, {pet.attributes.spayed_neutered}</p>
                          <br />
                          <h3 className="uppercase">Adoption Fee</h3>
                          <p>{pet.adoption_fee}</p>
                        </span>
                        <hr className="my-2 border-gray-300" />
                        <h3 className="font-bold">Meet {pet.name}</h3>
                        <br />
                        <span className="text-sm">
                          <p>{pet.description}</p>
                        </span>
                    </div>
                  </>
              )}
            </div>
          </div>
        </>
    )
}