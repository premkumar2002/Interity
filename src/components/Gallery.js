import React from 'react'
import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'
import g4 from '../images/g4.png'

const Gallery = () => {
  return (
    <div className='bg-gray-100 p-[7%]'>
        <h4 className='text-center'>Share your setup with</h4>
        <h1 className='text-center text-3xl font-bold pb-10'>#Interity</h1>
        <div className='flex'>
            <div className='w-3/4 mr-6'>
                <img alt="g1" src={g1} className='mb-6'/>
                <div className='flex mr-4'>
                    <img alt="g2" src={g2} className='w-1/2 mr-4'/>
                    <img alt="g3" src={g3} className='w-1/2'/>
                </div>
            </div>
            <div className='w-1/4'>
                <img alt="g4" src={g4} className='h-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery