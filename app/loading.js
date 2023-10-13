'use client'
import Image from 'next/image'
import React from 'react'
import load from '@/app/assets/load.png'
function loading() {
  return (
    <div className='w-screen h-screen'>
      <Image src={load} width={window.innerWidth}/>
    </div>
  )
}

export default loading
