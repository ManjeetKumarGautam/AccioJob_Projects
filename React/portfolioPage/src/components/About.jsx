import React from 'react'
import { aboutCards } from '../assets/assets'
const About = () => {
    return (
        <div className=' py-20 overflow-x-hidden'>
            <h1 className='text-[40px] sm:text-[50px] font-[700] mb-10'>Learn more about <span className='text-[#EA4722] '>what we solve</span></h1>

            <div className='flex sm:flex gap-5 sm:gap-20 overflow-x-auto py-10 about-card-wrapper'>
                {
                    aboutCards.map((item) => {
                        return <div key={item.id} className='min-w-90 sm:min-w-110 p-5 about-cards'>
                            <img src={item.image} alt="" className='w-15' />
                            <h2 className='text-2xl font-[700] my-5'>{item.title}</h2>
                            <p className='mb-5 text-s'>{item.description}</p>
                            <button className='about-card-btn border-2 rounded-2xl px-5 py-0.5'>Learn More</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default About