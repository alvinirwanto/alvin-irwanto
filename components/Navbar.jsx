import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import Link from 'next/link'

const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    //Show the icon of dark and light mode
    const [show, setShow] = useState(false)


    //Set the color based on theme    
    const { theme, setTheme } = useTheme()

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    return (
        <div className={shadowNav ? 'shadow-md fixed bottom-0 w-full md:sticky md:top-0 z-[999]' : 'fixed bottom-0 w-full md:sticky md:top-0 z-[999]'}>
            <header className={show
                ? 'rounded-t-xl bg-[color:var(--bg-light)]  dark:bg-[color:var(--dark-color)] shadow-custom py-5 md:py-0 z-[999]'
                : 'bg-[color:var(--bg-light)] dark:bg-[color:var(--dark-color)] py-5 md:py-0 z-[999]'}>
                <nav className='flex justify-between items-center md:justify-between w-full max-w-[370px] md:max-w-[720px] xl:max-w-[1200px] mx-auto'>
                    <a href="" className={show ? 'hidden' : 'block font-semibold text-lg text-[color:var(--base-color)]'}>Alvin</a>

                    <div className={show ? 'block ease-out duration-1000 w-full mx-auto' : 'hidden md:block'}>
                        <ul className='grid grid-cols-3 gap-y-8 gap-x-[4rem] py-8 md:flex md:gap-9'>
                            <li>
                                <Link
                                    href="#home"
                                    scroll={false}
                                    className='link-header'>
                                    <UilEstate className="md:hidden" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    scroll={false}
                                    className='link-header'>
                                    <UilUser className="md:hidden" />
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className='link-header'>
                                    <UilFileAlt className=" md:hidden" />
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className='link-header'>
                                    <UilBriefcaseAlt className="md:hidden" />
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className='link-header'>
                                    <UilScenery className="md:hidden" />
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className='link-header'>
                                    <UilMessage className="md:hidden" />
                                    Contact
                                </Link>
                            </li>

                            <div onClick={handleThemeSwitch} className='cursor-pointer hidden md:block'>
                                {
                                    theme === 'dark'
                                        ? <UilSun className='text-white' />
                                        : <UilMoon />
                                }
                            </div>
                        </ul>

                    </div>


                    <div className={show ? 'hidden' : 'flex gap-4 md:hidden'}>
                        <div onClick={handleThemeSwitch} className='cursor-pointer'>
                            {
                                theme === 'dark'
                                    ? <UilSun className='text-white' />
                                    : <UilMoon />
                            }
                        </div>
                        <button onClick={() => setShow(show => !show)}><UilApps /></button>
                    </div>
                </nav>

                <div className={show ? 'flex justify-end pr-5' : 'hidden'}>
                    <button onClick={() => setShow(show => !show)}><UilMultiply /></button>
                </div>
            </header>
        </div>
    )
}

export default Navbar