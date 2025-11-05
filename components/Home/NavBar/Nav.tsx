"use client";
import { FaCode } from 'react-icons/fa'
import { NavLinks } from '@/constants/constant'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useEffect, useState } from 'react'

type Props = {
    openNav: () => void
}

const Nav = ({openNav}: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''} duration-300 h-[12vh] z-10000 fixed w-full`}>
            <div className="flex items-center justify-between h-full w-[90%] mx-auto">
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='text-black w-5 h-5' />
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
                        ANASS
                    </h1>
                </div>
                {/* Links */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id} className='text-white hover:text-cyan-300 transition-all font-medium duration-200'>
                                <p>{link.Label}</p>
                            </Link>
                        )
                    })}
                </div>
                {/* Buttons */}
                <div className='flex items-center space-x-4'>
                    {/* CV button */}
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='w-5 h-5' />
                        <span>Downlad CV</span>
                    </button>
                    {/* Burger Menu */}
                    <HiOutlineMenuAlt3 onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav
