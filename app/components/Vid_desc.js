import React from 'react'
import ReactPlayer from 'react-player'


function Vid_desc() {
  return (
    <div className='containerGeneral vid flex lg:flex-row md:flex-col sm:flex-col gap-20 '>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/TgVorJfM8BM?si=6eG3smJCzjL-zNgh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
      <div className='w-1/3 sm:w-1/2 md:w-1/2'>
        <b className='text-red-900 '>
          JOURNEY TO A
          METAL WORLD
        </b>
        <p className='font-extralight'>
          Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planet's rocky mantles and crusts. The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world.
        </p>
        <div>
          <br />
          <br />
        About Psyche Mission
        <div className='h-1 bg-gradient-to-r from-pink-900 via-red-700 to-amber-400'>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Vid_desc
