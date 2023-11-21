'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import nasa from '@/app/assets/nasa.png'
import psyche from '@/app/favicon.ico'
import moon2 from '@/app/assets/aster.png'
import search from '@/app/assets/search.svg'
import options from '@/app/assets/options.svg'



function Navbar({ background }) {
    const currentDate = new Date()
    const launchDate = new Date(2023, 10, 13, 0, 0, 0)
    window.addEventListener('scroll', () => {
        let ele = document.getElementById('navBar')
        ele.style.backgroundColor = `rgb(255,255,255,${window.scrollY / 1000})`
    })
    let day = launchDate.getDate() - currentDate.getDate() - 1
    let hour = launchDate.getHours() + (24 - currentDate.getHours()) - 1
    let minute = launchDate.getMinutes() + (60 - currentDate.getMinutes()) - 1
    let second = launchDate.getSeconds() + (60 - currentDate.getSeconds())
    function correctDate(days, hours, minutes, seconds) {
        if (seconds >= 60) {
            seconds = seconds - 60
            minutes++
        }
        if (minutes >= 60) {
            minutes = minutes - 60
            hours++;
        }
        if (hours >= 24) {
            hours = hours - 24
            days++
        }
        if (days < 0) {
            days = days + 30
        }
        return {
            Days: days,
            Hours: hours,
            Minutes: minutes,
            Seconds: seconds

        }
    }


    const [timeleft, setTimeleft] = useState(correctDate(day, hour, minute, second))
    useEffect(() => {

        const intervalId = setInterval(() => {
            const currentDate = new Date()
            // Fetch or update data here and update state if needed
            // For example:
            // fetchData().then((newData) => setData(newData));
            let day = launchDate.getDate() - currentDate.getDate() - 1
            let hour = launchDate.getHours() + (24 - currentDate.getHours()) - 1
            let minute = launchDate.getMinutes() + (60 - currentDate.getMinutes()) - 1
            let second = launchDate.getSeconds() + (60 - currentDate.getSeconds())
            setTimeleft(correctDate(day, hour, minute, second))

        }, 1000); // 5000 milliseconds (5 seconds) interval

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };


    }, [])



    return (
        <>
            <div className={``} id='navBar'>
                <div className={`flex justify-between w-2/3 bg-inherit`}>

                    <div className='flex  fixed gap-3 py-3 bg-inherit w-full  z-50 '>
                        <div className='flex fixed gap-3 bg-inherit w-full'>

                            <div className='lg:ml-96 sm:ml-10 md:ml-40'>
                                <Image src={nasa} width={95} height={95} alt='nothing' />
                            </div>
                            <div className='bg-black h-18' style={{ width: 0.5 }}>
                            </div>
                            <div className=''>
                                <Image src={psyche} width={80} height={80} alt='nothing' />
                            </div>
                            <div className='py-7 lg:text-fuchsia-900  sm:text-white md:text-white  font-extrabold'>
                                PSYCHE
                            </div>
                        </div>
                        <div className=" h-8 flex gap-5 searchOptions py-1 mt-5 bg-inherit w-full" >
                            <Image src={search} width={60} alt='nothing' />
                            <Image src={options} width={60} alt='nothing' />
                        </div>
                    </div>
                </div>
                <div className='bouncy  mr-0 pr-0 ' >
                    <Image src={moon2} width={2000}  alt='' />
                </div>
                <div className='containerGeneral my-auto '>
                    <div className=' font-extralight text-black timeleft text-2xl' style={{fontFamily: "'Pixelify Sans', cursive"}}>
                        COUNTDOWN TO LAUNCH
                        <br />
                        <br />
                        <div className='flex gap-2'>
                            <div className='text-center'>
                                <div className='text-red-800 text-4xl relative bottom-2'>{timeleft.Days} </div>
                                
                                DAYS
                            </div>
                            /
                            <div className='text-center'>
                                <div className='text-red-800 text-4xl relative bottom-2'>{timeleft.Hours}</div>
                                
                                HOURS
                            </div>
                            /
                            <div className='text-center'>
                                <div className='text-red-800 text-4xl relative bottom-2'>{timeleft.Minutes}</div>
                                
                                MINS
                            </div>
                            /
                            <div className='text-center'>
                                <div className='text-red-800 text-4xl relative bottom-2' >{timeleft.Seconds}</div>
                                
                                SECS
                            </div>
                        </div>
                    </div>
                    <div className='timeleft text-black text-6xl mt-11 font-light  flex flex-col '>

                        <div className='l1 forTheFirst '>For the first time ever, we are</div>
                        <div className='l2 forTheFirst'>exploring a world made not of </div>
                        <div className='l3 forTheFirst'>rock or ice, <b className='font-light text-red-800'>but of metal.</b></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
