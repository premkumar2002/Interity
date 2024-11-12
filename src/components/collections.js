import React from 'react';
import living from '../images/living.png';
import dining from '../images/dining.png';
import bedroom from '../images/bedroom.png';

const Collections = () => {
  return (
    <div className='my-28'>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold mb-4'>Explore Our Stunning Collection</h1>
        <p className='text-sm'>Browse through our curated selection of exquisite furniture pieces</p>
        <p className='text-sm'>designed to elevate your living space.</p>
      </div>
      
      <div className='flex mt-10 mx-14 justify-center space-x-4'>
        <div className='text-center'>
          <img alt="living" src={living} className='w-[100%] rounded-md' />
          <p className='text-lg font-semibold mt-2'>Living</p>
        </div>
        
        <div className='text-center'>
          <img alt="dining" src={dining} className='w-[100%] rounded-md' />
          <p className='text-lg font-semibold mt-2'>Dining</p>
        </div>
        
        <div className='text-center'>
          <img alt="bedroom" src={bedroom} className='w-[100%] rounded-md' />
          <p className='text-lg font-semibold mt-2'>Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default Collections;
