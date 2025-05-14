import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='w-full relative overflow-hidden'>
            <img src={assets.contactImg} alt="" className='w-full object-cover' />
            {/* Left Section */}
            <div className='w-60 sm:w-120 absolute top-[50%] left-[10%] contact-content'>
                <h1 className='text-[32px] md:text-[40px] lg:text-[50px] font-bold leading-tight text-shadow-2xs'>
                    Ready to give your<span className='text-[#EA4722]'> institution an upgrade?</span>
                </h1>
                <button className='rounded-2xl mt-5 px-6 py-2 bg-[#30A981] text-white text-sm md:text-base'>
                    Contact us
                </button>
            </div>


        </div>

    )
}

export default Contact