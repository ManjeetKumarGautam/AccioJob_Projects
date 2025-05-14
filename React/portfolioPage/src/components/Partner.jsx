import React from 'react'
import { assets, partnerSectionData } from '../assets/assets'
import CountUp from 'react-countup'

const Partner = () => {
    return (
        <section className='py-20'>
            <div className='w-100'>
                <h1 className='text-[32px] md:text-[40px] lg:text-[50px] font-bold leading-tight'>
                    The best in the country  <span className='text-[#EA4722]'>trust us</span>
                </h1>
            </div>

            <div className='flex flex-wrap justify-between items-center gap-5 mt-10'>
                {
                    partnerSectionData.map((item, i) => {
                        return <div key={item.id} className='flex flex-col items-center'>
                            <CountUp end={item.number} duration={2} className={`text-7xl font-[700] ${i % 2 == 1 ? "text-[#30A981]" : "text-[#EDAA20]"}`} />
                            <span className='font-[700]'>{item.text}</span>
                        </div>
                    })
                }
            </div>

            <div className=" carousel-wrapper mt-10">
                <div className="carousel-track">
                    {/* Duplicate image group twice for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i}>
                            <img src={assets.clg1} alt="img1" className="h-12 sm:h-20 inline-block carousel-image" />
                            <img src={assets.clg2} alt="img2" className="h-12 sm:h-20 inline-block carousel-image" />
                            <img src={assets.clg3} alt="img3" className="h-12 sm:h-20 inline-block carousel-image" />
                            <img src={assets.clg4} alt="img4" className="h-12 sm:h-20 inline-block carousel-image" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Decorative Line */}
            <div className="line translate-[100%] w-[50%] md:translate-[150%] md:w-[40%] h-2 mt-10 bg-amber-600 mx-auto"></div>

        </section>
    )
}

export default Partner