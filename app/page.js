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
    <main className='m' onScroll={() => { setBackground("bg-white") }}>
      <Navbar background={background} />
      <Vid />


      <div className=' slides ' >
        <Slides />
      </div>
      <div className="containerGeneral rings ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Rings />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
        <div className=' rings bg-gradient-to-r from-purple-900 to-red-500 h-32   ' style={{width:window.innerWidth}}>

        </div>
    </main>
  )
}
