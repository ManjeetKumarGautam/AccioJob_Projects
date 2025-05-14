import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#F8F7F7] pt-20 pb-10 px-10 sm:px-[10%]'>
            <div className="">
                <img src={assets.Logo} alt="" />
            </div>

            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 my-10">
                <ul className='flex flex-row sm:flex-col gap-5'>
                    <li><a href="">Resoures</a></li>
                    <li><a href="">Solutions</a></li>
                    <li><a href="">About us</a></li>
                </ul>

                <div className="">
                    <span>Contact us</span>
                    <div className="line w-30 h-1 my-2 bg-[#E94724]"></div>
                    <p>support@campus.technology</p>
                    <p>+91-9980-747-722</p>
                </div>

                <div className="">
                    <span>Chat with us</span>
                    <div className="line w-30 h-1 my-2 bg-[#E94724]"></div>
                    <div className='flex flex-row gap-2'>
                        <a href="https://www.facebook.com/" target='_new'><img src={assets.fb} alt="icon" className='w-6' /></a>
                        <a href="https://www.instagram.com/" target='_new'><img src={assets.insta} alt="icon" className='w-6' /></a>
                        <a href="https://x.com/" target='_new'><img src={assets.twitter} alt="icon" className='w-6' /></a>
                        <a href="https://www.linkedin.com/" target='_new'><img src={assets.linkedin} alt="icon" className='w-6' /></a>
                    </div>
                </div>

            </div>

            <div className='flex justify-between mt-20 text-xs sm:text-[14px] md:text-[18px]'>
                <span>© 2022, Kahan Technologies Pvt. Ltd.</span>
                <span>Designed by Grapdes</span>
            </div>
        </div>
    )
}

export default Footer