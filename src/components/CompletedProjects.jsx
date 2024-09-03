import React from 'react'

import img1 from '../assets/project1.png'
import img5 from '../assets/project5.jpg'
import img3 from '../assets/project1.jpg'
import img4 from '../assets/project4.jpg'
import arrow from '../assets/arrow.png'

const CompletedProjects = () => {
  return (
    <div className='mx-auto my-30 w-90 text-center'>
        <div className='flex items-center justify-around mb-30'>
            <img src={img1} alt="" className='gallery-img'/>
            <img src={img3} alt="" className='gallery-img'/>
            <img src={img5} alt="" className='gallery-img'/>
            <img src={img4} alt="" className='gallery-img'/>
        </div>

        <button className='btn dark-btn'>
            See more...
            <img src={arrow} alt="Arrow img" className=' ml-3' />
        </button>
    </div>
  )
}

export default CompletedProjects