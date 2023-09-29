import Image from 'next/image'
import React from 'react'
import moon from '@/app/assets/moon.png'
import satellite from '@/app/assets/satellite-removebg.png'


function Rings() {
    return (
        <div className='flex gap-1 ' >
            <div className='w-1/3'>
                <b className='text-red-900 '>
                    WHERE ARE WE NOW?

                </b>
                <p>
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
            <div className='circle z-10 absolute left-1/2 ringi4' style={{width:"800px",height:"200px",rotate:"-8deg"}}>
                   <div className=' w-6 h-6 relative top-10 left-3 ' >
                   </div>
                   <div className="circle relative ringi " style={{width:"700px",height:"150px",borderColor:"red",left:"20px",rotate:"-1deg"}}></div>

                   <div className="circle relative bottom-2/3 ringi2" style={{width:"600px",height:"100px",borderColor:"orange",bottom:"137px",left:"50px",rotate:"-1deg"}}></div>

                   <div className="circle relative ringi3" style={{width:"500px",height:"50px",borderColor:"yellow",bottom:"220px",left:"80px",rotate:"-1deg"}}></div>
            </div>
            <div className='z-20 relative top-10 left-7'>
                    <Image src={satellite} width={450} height={200}/>

            </div>
            <div className='relative bottom-20 z-10 -left-14'>
                    <Image src={moon} width={200} height={200}/>
            </div>

        </div>
    )
}

export default Rings
