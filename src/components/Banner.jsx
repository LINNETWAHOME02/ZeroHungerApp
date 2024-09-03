import React from 'react'

import arrow from'../assets/arrow.png'

const Banner = () => {
  return (
    <div className='banner flex items-center justify-center'>
        <div className='text-center max-w-screen-md'>
            <h1 className='text-4xl font-semibold'>Aimed to solve the UN SDG: Zero Hunger</h1>
            <p className='max-w-screen-md text-xl m-10 mx-auto mb-20 leading-5 flex flex-col'>Our app is majorly aimed to focuse on: 
                <span className='text-lg'>1. Making remote areas accessible to volunteers</span>
                <span className='text-lg'>2. Providing a platform for volunteers to connect with food banks snd food stamps</span>
            </p>

            <div className=' flex items-center justify-between'>
                <button className='btn inline-flex items-center justify-center'>
                    Explore more
                    <img src={arrow} alt="Arrow img" className='w-10 ml-2' />
                </button>

                <button className='btn'>Sign Up</button>
                <button className='btn'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Banner