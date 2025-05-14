import React from 'react'
import { techList } from '../assets/assets'

const Educational = () => {
    return (
        <div className='bg-[#F8F7F7] px-4 py-20 md:px-[8%] relative'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-screen-xl mx-auto'>

                {/* Left Section */}
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-[32px] md:text-[40px] lg:text-[50px] font-bold leading-tight'>
                        Why your educational <span className='text-[#EA4722]'>institution needs Campus Tech</span>
                    </h1>
                    <button className='rounded-2xl mt-5 px-6 py-2 bg-[#30A981] text-white text-sm md:text-base'>
                        About us
                    </button>
                </div>

                {/* Right Section */}
                <div className='grid mt-10 sm:mt-0 grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10'>
                    {
                        techList.map((item) => (
                            <div key={item.id} className='flex items-start gap-4 text-base md:text-lg'>
                                <img src={item.image} alt="icon" className='w-[40px] md:w-[50px]' />
                                <span>{item.text}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Decorative Circles */}
            <div className='hidden md:block absolute top-[-80px] left-[-80px] w-[160px] h-[160px] rounded-full bg-[#E94724]'></div>
            <div className='hidden md:block absolute bottom-[-113px] right-[-113px] w-[226px] h-[226px] rounded-full bg-[#30A981]'></div>
        </div>

    )
}

export default Educational