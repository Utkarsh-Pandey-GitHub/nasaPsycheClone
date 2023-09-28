'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Vid from './components/Vid_desc'
import Slides from './components/Slides'
import { useState } from 'react'
import Rings from './components/Rings'


export default function Home() {
  const [background, setBackground] = useState("bg-transparent")
  
  

  
  
  return (
    <main className='m' onScroll={()=>{setBackground("bg-white")}}>
      <Navbar  background={background}/>
      <Vid/>
      {/* <div className='bg-blue-700 bigBox'>
        <div className='bg-red-600 smallBox'>
        </div>
      </div> */}
       
      
      <div className=' slides ' >
        <Slides/>
      </div>
      <div className="containerGeneral rings">
        <Rings/>
      </div>
    </main>
  )
}
