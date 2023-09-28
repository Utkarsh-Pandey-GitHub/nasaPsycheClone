'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import launchVehicle from '@/app/assets/launchVehicle.jpg'
// import jupiter from '@/app/assets/jupiter.jpeg'
import jupi from '@/app/assets/jupiter.jpg'
import launchVehicles from '@/app/assets/launchVehicles.jpg'
import astronaut from '@/app/assets/astronaut.jpg'
import JohnsonSpaceCenter from '@/app/assets/JohnsonSpaceCenter.jpg'
import jwst from '@/app/assets/jwst.jpg'
import satellite from '@/app/assets/satellite.jpg'
import spirit from '@/app/assets/spirit.jpg'


function Slides() {
  const imagesArray = [spirit, jupi, astronaut, JohnsonSpaceCenter, launchVehicle, launchVehicles, jwst, satellite]
  const [i, setI] = useState(0)
  const nextClick = () => {
    let ni = i + 1;
    if (i == imagesArray.length - 1) {

      setI(0)
    }
    else {
      setI(ni)
    }
  }
  const prevClick = () => {
    let ni = i - 1;
    if (i == 0) {
      ni = imagesArray.length - 1
      setI(ni)
    }
    else {
      setI(ni)
    }
  }
  return (
    <div className='w-full '>
      <div className='bg-rose-500 w-16 h-16 z-10 absolute bottom-1/3 left-10 rounded-full' onClick={prevClick}>
      </div>


      <Image src={imagesArray[i]}  className='w-full' />


      <div className='bg-rose-500 w-16 h-16 z-10 absolute bottom-1/3 right-10 rounded-full ' onClick={nextClick}>
      </div>
    </div>
  )
}

export default Slides
