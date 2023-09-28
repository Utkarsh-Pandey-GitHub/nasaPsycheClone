'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import nasa from '@/app/assets/nasa.png'
import psyche from '@/app/favicon.ico'
import moon from '@/app/assets/moon.png'
import search from '@/app/assets/search.svg'
import options from '@/app/assets/options.svg'

function Navbar() {
    const currentDate = new Date()
    const launchDate = new Date(2023, 9, 30, 0, 0, 0)
  
    return (
        <>
            <div>
                <div className='flex justify-between w-2/3 bg-transparent'>

                    <div className='flex  fixed gap-3 py-3 bg-inherit w-full  z-50 '>
                        <div className='flex fixed gap-3 bg-inherit'>

                            <div className='lg:ml-96 sm:ml-10 md:ml-40'>
                                <Image src={nasa} width={95} height={95} alt='nothing'/>
                            </div>
                            <div className='bg-black h-18' style={{ width: 0.5 }}>
                            </div>
                            <div className=''>
                                <Image src={psyche} width={80} height={80} alt='nothing'/>
                            </div>
                            <div className='py-7 lg:text-fuchsia-900  sm:text-white md:text-white  font-extrabold'>
                                PSYCHE
                            </div>
                        </div>
                        <div className="w-8 h-8 flex gap-5 searchOptions py-1 mt-5 " >
                            <Image src={search} width={60} alt='nothing'/>
                            <Image src={options} width={60} alt='nothing'/>
                        </div>
                    </div>
                </div>
                <div className='bouncy  mr-0 pr-0 '>
                    <Image src={moon} width={2000} />
                </div>
                <div className='containerGeneral my-auto'>
                    <div className='text-8xl font-extrabold timeleft' >
                        TIME 
                    </div>
                    <div className='timeleft text-6xl mt-11 font-light '>

                        For the first time ever, we are
                        exploring a world made not of
                        rock or ice, <b className='font-light text-red-800'>but of metal.</b>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
