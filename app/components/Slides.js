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
import rightArrow from '@/app/assets/rightArrow.png'
import leftArrow from '@/app/assets/leftArrow.png'


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
      <div className='bg-rose-500 w-16 h-16 z-10 absolute bottom-1/3 left-10   rounded-full flex justify-center p-0' onClick={prevClick}>
        <Image src={leftArrow} height={10} width={30} className='m-4'/>
      </div>

      <div className='h-1/3'>

      <Image src={imagesArray[i]}   width={window.innerWidth}/>
      </div>


      <div className='bg-rose-500 w-16 h-16 z-10 absolute bottom-1/3 right-10 rounded-full ' onClick={nextClick}>
        

        <Image src={rightArrow} height={20} width={30} className='ml-4 mt-4'/>
        
      </div>
    </div>
  )
}

export default Slides
