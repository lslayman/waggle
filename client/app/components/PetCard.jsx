'use client'

import Image from 'next/image'
import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown, faHeart, faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import TinderCard from 'react-tinder-card';
import PlaceholderImage from './Placeholder';
import { useUserContext } from '@/userContext';


export default function PetCard({ pet }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPreview, setIsPreview] = useState(true);
  const [orgName, setOrgName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(pet.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const { user } = useUserContext();

  console.log(pet)

  //Image click-thru functionality
  const showNextImage = () => {
    if (currentImageIndex < pet.photos.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const showPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleLeftClick = (e) => {
    const { clientX } = e.nativeEvent;
    const imageWidth = e.target.offsetWidth;

    if (clientX < imageWidth / 2) {
      showPrevImage();
    }
  };

  const handleRightClick = (e) => {
    const { clientX } = e.nativeEvent;
    const imageWidth = e.target.offsetWidth;

    if (clientX >= imageWidth / 2) {
      showNextImage();
    }
  };

  // TinderCard/Swiping functionality
  const childRefs = useMemo(
    () =>
    Array(pet.length)
      .fill(0)
      .map((i) => React.createRef()),
      []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < pet.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${pet.name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < pet.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[index].current.restoreCard()
  }

  //OrgData fetching -- incomplete
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

  // Toggle view
  const toggleCardView = () => {
      setIsPreview(!isPreview)
  }

  // Add to favorites
  function handleAddToFavorites(){
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);

    const petObj = {
      "pet_id": pet.id,
      "user_id": user.id
    }
    console.log(petObj)

    fetch('/api/favorites', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(petObj),
    })
    .then(res => res.json())
    .then(data => setIsFavorite(data))
    }

    return (
        <>
          <div className="flex justify-center">
          <TinderCard
            ref={childRefs[currentIndex]}
            className='swipe'
            key={pet.name}
            onSwipe={(dir) => swiped(dir, pet.name, currentIndex)}
            onCardLeftScreen={() => outOfFrame(pet.name, currentIndex)}  
          >
            <div className="w-full max-w-sm rounded overflow-hidden shadow-lg">
              {isPreview ? (
                //Render card preview
                <>
                  <div className="relative">
                   {pet.photos && pet.photos.length > 0 ? (
                      pet.photos.map((photo, index) => (
                        <Image 
                          className="w-full"
                          src={pet.photos[currentImageIndex].medium}
                          alt={`Photo ${currentImageIndex + 1}`}
                          width={500}
                          height={500}
                          onClick={(e) => {
                            handleLeftClick(e);
                            handleRightClick(e);
                          }}
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
                    <button onClick={()=> swipe('left')}>
                      <FontAwesomeIcon style={{color: "red"}} icon={faXmark} size="2x"/>
                    </button>
                    <button onClick={handleAddToFavorites}>
                      <FontAwesomeIcon style={{color: "gold"}} icon={faStar} size="xl"/>
                    </button>
                    <button onClick={() => swipe('right')}>
                      <FontAwesomeIcon style={{color: "green"}} icon={faHeart} size="2x"/>
                    </button>
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
                        <div className="flex justify-center">
                          <FontAwesomeIcon style={{color: "red"}} icon={faXmark} size="2x"/>
                          <button onClick={handleAddToFavorites}>
                            <FontAwesomeIcon style={{color: "gold"}} icon={faStar} size="xl"/>
                          </button>
                          <FontAwesomeIcon style={{color: "green"}} icon={faHeart} size="2x"/>
                        </div>
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
          </TinderCard>
          </div>
        </>
    )
}