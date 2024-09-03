import React from 'react'

import foodStampImg from '../assets/food-stamps.jpg'
import volunteerIMG from '../assets/volunteerImg2.jpg'
import foodStampIcon from '../assets/food-stamp-icon.png'
import volunteerIcon from '../assets/volunteer.png'

const Projects = () => {
  return (
    <div className='my-20 mx-auto w-90 flex items-center justify-around'>
        
        <div className='projects-card'>
            <img src={foodStampImg} alt="Food Stamp IMG" className='projects-images'/>
            
            <div className="caption">
                <img src={foodStampIcon} alt="icon" className='caption-img'/>
                <h2>Food Stamps</h2>
                <p>Make food stamps more accessible</p>
            </div>
        </div>

        <div className='projects-card'>
            <img src={volunteerIMG} alt="Volunteer IMG" className='projects-images'/>

            <div className="caption">
                <img src={volunteerIcon} alt="icon" className='caption-img'/>
                <h2>Volunteer</h2>
                <p>Volunteer for various roles, including healthcare</p>
            </div>
        </div>
    </div>
  )
}

export default Projects