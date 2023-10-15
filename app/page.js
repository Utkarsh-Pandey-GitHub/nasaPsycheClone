'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Vid from './components/Vid_desc'
import Slides from './components/Slides'
import { useState } from 'react'
import Rings from './components/Rings'
import GetInvolved from './components/GetInvolved'
import NewsBlog from './components/NewsBlog'


export default function Home() {
  const [background, setBackground] = useState("bg-transparent")





  return (
    <main className='m ' >
      <Navbar background={background} />
      <Vid />


      <div className=' slides ' >
        <Slides />
      </div>
      <div className="containerGeneral rings ">

        <Rings />

      </div>
      <div className='flex justify-center  body_getInvolved'>
        <div className='w-3/4'> 

          <GetInvolved />
        </div>

      </div>
      <div className='newsblog'>
        <NewsBlog/>
        
      </div>
      <div className=' relative last_band bg-gradient-to-r from-purple-900 to-red-500 h-32 text-white  text-xl lg:pl-48 py-12' style={{ width: window.innerWidth }}>
        <b>PSYCHE </b>/ JOURNEY TO A METAL WORLD
      </div>
    </main>
  )
}
