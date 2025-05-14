import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full py-5 bg-white relative">
            <nav className="flex justify-between items-center w-[90%] max-w-screen-xl mx-auto">
                {/* Logo */}
                <img src={assets.Logo} alt="logo" className="h-10" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
                    <li><a href="">Solutions</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>

                {/* Mobile Toggle Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <div onClick={() => setMenuOpen(false)} className="fixed   bg-opacity-90 z-40"></div>

                    <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 px-6 py-6 flex flex-col gap-10 transition-transform duration-300 ease-in-out">

                        {/* Close button */}
                        <div className="flex justify-end">
                            <button onClick={() => setMenuOpen(false)} className='cursor-pointer'>
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Nav Items */}
                        <ul className="w-full flex flex-col gap-6 text-gray-800 font-medium text-center text-lg">
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </>
            )}


        </header>
    )
}

export default Navbar