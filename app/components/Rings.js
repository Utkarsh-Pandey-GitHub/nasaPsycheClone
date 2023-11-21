import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import moon from '@/app/assets/aster.png'
import satellite from '@/app/assets/satellite-removebg.png'


function Rings() {
    const myRef0 = useRef(null)
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)
    const sate = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entriesObserved) => {
            entriesObserved.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id == 'moonss') {

                        entry.target.classList.add('moonss');

                    }
                    else if (entry.target.id == 'sate') {
                        entry.target.classList.add('sate');
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
                        if (entry.target.classList.contains('sate')) {
                            entry.target.classList.remove('sate');
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
        if (sate.current) {
            observer.observe(sate.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className='flex gap-1 sm:text-xl lg:flex-row md:flex-col sm:flex-col' >
            <div className='lg:w-1/3 sm:w-1/2 md:w-1/2'>
                <b className='text-red-900 '>
                    WHERE ARE WE NOW?

                </b>
                <p className='sm:text-xl font-extralight text-black'>
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
            <div className='circle z-10 absolute left-1/2  ringss sm:top-10' style={{ width: "800px", height: "200px", rotate: "-8deg" }}>
                <div className=' w-6 h-6 relative top-10 left-3 ' ref={myRef0}></div>
                <div className="circle relative  " style={{ width: "700px", height: "150px", borderColor: "red", left: "20px", rotate: "-1deg" }} ref={myRef1}></div>

                <div className="circle relative bottom-2/3 " style={{ width: "600px", height: "100px", borderColor: "orange", bottom: "127px", left: "50px", rotate: "-1.8deg" }} ref={myRef2}></div>

                <div className="circle relative " style={{ width: "500px", height: "50px", borderColor: "yellow", bottom: "210px", left: "85px", rotate: "-1.85deg" }} ref={myRef3}></div>
            </div>
            <div className='z-20 relative top-10 left-7 sm:invisible lg:visible md:invisible' id='sate' ref={sate}>
                <Image src={satellite} width={450} height={200} />

            </div>
            <div className='relative -bottom-5  z-10  -left-7 sm:invisible lg:visible md:invisible' id="moonss" ref={myRef4} >
                <Image src={moon} width={200} height={100} />
            </div>

        </div>
    )
}

export default Rings
