import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import gi from '@/app/assets/getInvolved.jpg'




function GetInvolved() {
    const [free, setFree] = useState("")
    useEffect(() => {
      const g=scrollY
      if (g>=1000) {
        setFree("free")
      }else{
        setFree("trap")
      }
    
      
    }, [])
    

    return (
        <div className='flex flex-row gap-10 '>
            <div className={`img_getInvolved w-2/3 ${free}`} >
                <Image src={gi} />
            </div>
            <div className='relative w-1/3'>
                <b className='text-red-900 '>
                    JOURNEY TO A
                    METAL WORLD
                </b>
                <p>
                    Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planet's rocky mantles and crusts. The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world.
                </p>
                <div>
                    <br />
                    <br />
                    Get Involved
                    <div className='h-1 bg-gradient-to-r from-pink-900 via-red-700 to-amber-400'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInvolved
