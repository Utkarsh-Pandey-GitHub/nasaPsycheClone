import React from 'react'
import ReactPlayer from 'react-player'


function Vid_desc() {
  return (
    <div className='containerGeneral vid flex gap-64'>
      <iframe src="https://www.youtube.com/watch?v=TgVorJfM8BM" width={500} height={250} frameborder="0"></iframe>
      <div className=''>
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
        About Psyche Mission
        <div className='h-1 bg-gradient-to-r from-pink-900 via-red-700 to-amber-400'>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Vid_desc