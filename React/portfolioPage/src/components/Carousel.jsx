import React, { useState, useEffect } from 'react'
import { slides, assets } from '../assets/assets';

const Carousel = () => {

    const [current, setCurent] = useState(0);

    function prevSlide(val) {
        setCurent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    function nextSlide(val) {
        setCurent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    function goToSlide(val) {
        setCurent(val);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [current])

    return (
        <div className="">
            <div className="overflow-hidden">
                {/* Slide Container */}
                <div
                    className="flex transition duration-500 ease-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((item, index) => (
                        <div
                            key={item.id}
                            className="min-w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6 p-6 md:p-10"
                        >
                            {/* Text Content */}
                            <div className="content-area text-center lg:text-left">
                                <h1 className="text-[35px] md:text-[40px] lg:text-[45px] font-bold mb-6 headings" dangerouslySetInnerHTML={{ __html: item.title }}></h1>

                                <p className="text-base md:text-lg mb-6">{item.description}</p>
                                <button className="rounded-2xl px-6 py-2 bg-[#30A981] text-white text-sm md:text-base">
                                    {item.buttonText}
                                </button>
                            </div>

                            {/* Image */}
                            <div className="content-img w-full flex justify-center lg:justify-end">
                                <img src={item.image} alt="slide" className="max-w-xs md:max-w-md lg:max-w-lg w-full" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls: Dots & Arrows */}
                <div className="flex flex-row justify-between items-center gap-4 p-5">
                    {/* Navigation Dots */}
                    <div className="flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${current === index ? "bg-[#ff5733]" : "bg-gray-300"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="arrow w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center transition-colors duration-300"
                            aria-label="Previous slide"
                        >
                            <img src={assets.LeftArrow} className="w-3 h-3" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="arrow w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center transition-colors duration-300"
                            aria-label="Next slide"
                        >
                            <img src={assets.RightArrow} className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="line translate-[-50%] w-[90%] md:w-[70%] h-2 mt-8 bg-[#EDAA20] mx-auto"></div>
        </div>

    )
}

export default Carousel