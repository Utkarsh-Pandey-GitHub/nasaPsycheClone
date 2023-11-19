import Image from 'next/image'
import React from 'react'
import transformers from '@/app/assets/transformers.jpeg'

function NewsCard({ data,imgsrc }) {
  return (
    <div className='w-1/6  border-orange-500 box-border cardAni cardSwipe' style={{ width: "26vw" }}>
      
      {/* <Image src={imgsrc?imgsrc:transformers} width={innerWidth*0.26} height={innerHeight*0.25}/> */}

      <img src={imgsrc?imgsrc:transformers} alt="" srcset="" />

      
      
      <b className='text-black' ><i>{data ? data : ""}</i></b>

    </div>
  )
}

export default NewsCard
