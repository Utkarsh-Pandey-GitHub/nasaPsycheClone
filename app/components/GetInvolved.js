import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gi from '@/app/assets/getInvolved.jpg'




function GetInvolved() {
    
    const myRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('giiR')) {
                        entry.target.classList.remove('giiR');
                    }
                    entry.target.classList.add('gii');

                }
                else {
                    if (entry.target.classList.contains('gii')) {
                        entry.target.classList.remove('gii');
                    }
                    entry.target.classList.add('giiR');
                }
            });
        },{
            threshold:0.4
        });

        if (myRef.current) {
            observer.observe(myRef.current);
        }

        return () => {
            // Clean up the observer when the component unmounts
            observer.disconnect();
        };
    }, []);

    return (
        <div className='flex flex-row gap-10 '>
            <div className={`img_getInvolved w-2/3 target-element`} id='getInvolvedImg' ref={myRef}>
                <Image src={gi} />
            </div>
            <div className='relative w-1/3' id='getInvolvedText'>
                <b className='text-red-900 '>
                    JOURNEY TO A
                    METAL WORLD
                </b>
                <p className='font-extralight text-black'>
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
