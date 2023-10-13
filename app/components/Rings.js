import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import moon from '@/app/assets/moon.png'
import satellite from '@/app/assets/satellite-removebg.png'


function Rings() {
    const myRef0 = useRef(null)
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entriesObserved) => {
            entriesObserved.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id == 'moonss') {

                        entry.target.classList.add('moonss');

                    }
                    else {

                        if (entry.target.classList.contains('ringssR')) {
                            entry.target.classList.remove('ringssR');
                        }
                        entry.target.classList.add('ringss');
                    }

                }
                else {
                    
                    if (entry.target.classList.contains('ringss')) {
                        entry.target.classList.remove('ringss');

                    }
                    else{

                        if (entry.target.classList.contains('moonss')) {
                            entry.target.classList.remove('moonss');
                        }
                    }

                    // entry.target.classList.add('ringssR');
                }
            })

        }, {
            threshold: 0.4
        })
        if (myRef0.current) {

            observer.observe(myRef0.current)
        }
        if (myRef1.current) {

            observer.observe(myRef1.current)
        }
        if (myRef2.current) {
            observer.observe(myRef2.current)
        }
        if (myRef3.current) {
            observer.observe(myRef3.current)
        }
        if (myRef4.current) {
            observer.observe(myRef4.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className='flex gap-1 sm:text-xl' >
            <div className='lg:w-1/3 sm:w-max'>
                <b className='text-red-900 '>
                    WHERE ARE WE NOW?

                </b>
                <p className='sm:text-xl'>
                    A space mission typically has six phases, A-F. The Psyche mission is currently in “Phase D.” In this phase, the mission is focused on instrument and spacecraft assembly, testing and launch.

                </p>
                <div>
                    <br />
                    <br />
                    Experience the Timeline
                    <div className='h-1 bg-gradient-to-r from-pink-900 via-red-700 to-amber-400'>

                    </div>
                </div>
            </div>
            <div className='circle z-10 absolute left-1/2 sm:invisible lg:visible md:invisible ringss' style={{ width: "800px", height: "200px", rotate: "-8deg" }}>
                <div className=' w-6 h-6 relative top-10 left-3 ' ref={myRef0}></div>
                <div className="circle relative  " style={{ width: "700px", height: "150px", borderColor: "red", left: "20px", rotate: "-1deg" }} ref={myRef1}></div>

                <div className="circle relative bottom-2/3 " style={{ width: "600px", height: "100px", borderColor: "orange", bottom: "137px", left: "50px", rotate: "-1deg" }} ref={myRef2}></div>

                <div className="circle relative " style={{ width: "500px", height: "50px", borderColor: "yellow", bottom: "220px", left: "80px", rotate: "-1deg" }} ref={myRef3}></div>
            </div>
            <div className='z-20 relative top-10 left-7 sm:invisible lg:visible md:invisible'>
                <Image src={satellite} width={450} height={200} />

            </div>
            <div className='relative bottom-20 z-10 -left-14 sm:invisible lg:visible md:invisible' id="moonss" ref={myRef4} >
                <Image src={moon} width={200} height={200} />
            </div>

        </div>
    )
}

export default Rings
