import Image from 'next/image'
import Navbar from './components/Navbar'
import Vid from './components/Vid_desc'
export default function Home() {
  return (
    <main className='m'>
      <Navbar />
      <Vid/>
      <div className='bg-blue-700 bigBox'>
        <div className='bg-red-600 smallBox'>
        </div>
      </div>
    </main>
  )
}
