'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function PetCard({pet}) {
    const [isPreview, setIsPreview] = useState(true)

    const toggleCardView = () => {
        setIsPreview(!isPreview)
    }

    return (
        <>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {isPreview ? (
              //Render card preview
              <>
                <div className="relative">
                  <img className="w-full" src={pet.photo} alt={pet.name} />
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
                      <p>{pet.breed}
                      <br />
                      {pet.organization} • {pet.location}
                      </p>
                    </span>
                </div>
              </>
            ) : (
                //Render full card
                <>
                  <div className="relative">
                    <img className="w-full" src={pet.photo} alt={pet.name} />
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
                        <p>{pet.breed}
                        <br />
                        {pet.organization} • {pet.location}
                        </p>
                        <br />
                        <p>{pet.age} • {pet.gender} • {pet.size} • {pet.color}</p>
                      </span>
                      <hr className="my-2 border-gray-300" />
                      <h3 className="font-bold">About</h3>
                      {/* this section will also have characteristics, good in a home with, etc (if on pet's profile) */}
                      <br />
                      <span className="text-sm">
                        <h3 className="uppercase">Coat Length</h3>
                        <p>{pet.coat_length}</p>
                        <br />
                        <h3 className="uppercase"> House-Trained</h3>
                        <p>{pet.house_trained}</p>
                        <br />
                        <h3 className="uppercase">Health</h3>
                        <p>{pet.vaccinations}, {pet.spayed_neutered}</p>
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
        </>
    )
}