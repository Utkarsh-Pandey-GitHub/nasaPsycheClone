"use client"
import React, { useEffect, useRef, useState } from 'react'
import NewsCard from './NewsCard'
import Image from 'next/image'
import prev from '@/app/assets/previous.png'
import next from '@/app/assets/next.png'

function NewsBlog() {
  const [right, setRight] = useState(0)
  const last = useRef(null)
  const [data, setData] = useState([]);

  const apiUrl = 'https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=6774ff37230b426c8c77e5f635743bcd';
  useEffect(() => {

    // Make a GET request using the fetch API


    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((result) => {
        // Update component state with the fetched data


        setData(result.articles);
        // setData(data.articles)
        console.log(data);
        // console.log(articles);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });



    const observer = new IntersectionObserver((objsUnderObs) => {
      objsUnderObs.forEach((obj) => {
        if (obj.isIntersecting) {
          const butR = document.getElementById('rightButton');
          if (obj.target.id = "last") {
            butR.classList.add('hidden')
          }
        }
      })
    })
    if (last.current) {
      observer.observe(last.current)

    }
    return () => {
      observer.disconnect()
    }
  }, [data])

  return (
    <div className='' style={{ width: "99vw", height: "25vw" }}>
      <div className='float-left relative top-1/2 z-10 '>
        <button type="button" className=' bg-white rounded-full ' onClick={() => {
          setRight(right - window.innerWidth >= 0 ? right - window.innerWidth / 4 : 0);
          document.getElementById('rightButton').classList.remove('hidden');
        }}><Image src={prev} /></button>
      </div>


      <div className='float-right z-30 relative top-1/2' style={{ float: "right" }}>

        <button type="button  " className='bg-white rounded-full' id='rightButton' onClick={() => {
          setRight(right + window.innerWidth / 4);

        }}><Image src={next} /></button>
      </div>


      <div className=' absolute left-0 top-0  '>
        <div className='grid grid-flow-col  gap-4 relative right_ani' style={{ right: right }}>
          <NewsCard />
          <div className='text-red-700 w-1/4'>

            <h3 className='text-black text-bold'>NEWS AND  BLOG</h3>
            <p className='text-black mt-40 mb-5'>All News</p>
            <div className='h-1 bg-gradient-to-r from-pink-900 via-red-700 to-amber-400'>
            <NewsCard data={""} />

            </div>
          </div>

          {data.map((item, index) => {
            return (<NewsCard data={item.title ? item.title : "title"} imgsrc={item?.urlToImage} />)
          })}

          <div ref={last}>

            <NewsCard data={""} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewsBlog
