"use client";
import { NavLinks } from '@/constants/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean
    closeNav: () => void
}

const MobileNav = ({showNav, closeNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

    return (
        <div>
            {/* overlay */}
            <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-10000 bg-black opacity-70 w-full h-screen`} />
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-100050 right-0`}>
                {NavLinks.map((link) => {
                    return(
                        <Link href={link.url} key={link.id} className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-b-cyan-300 sm:text-[30px]'>
                            <p>{link.Label}</p>
                        </Link>
                    )
                })}
                {/* cross icon */}
                <CgClose 
                    onClick={closeNav}
                    className='absolute top-[2.6rem] right-[1.7rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'
                />
            </div>
        </div>
    )
}

export default MobileNav
