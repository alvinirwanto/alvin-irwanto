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

import gsap from 'gsap'
// import { Timeline } from 'gsap/gsap-core'

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


    //Show the navbar in the mobile version
    const [showMenu, setShowMenu] = useState(false)


    //Set the color based on theme   
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleThemeSwitch = () => {
        // setTimeout(() => {
        // }, 1300)
        setTheme(theme === 'dark' ? 'light' : 'dark')
        
        // gsap.timeline({ repeat: 0 })
        //     .to("#sun", { height:'100vh', width:'100vh', duration: .5 })

        // gsap.timeline({ repeat: 1 })
        //     .to("#icon-sun", { scale: .7 })

        // gsap.timeline({ repeat: -1 })
        //     .to("#moon", { scale: 1.5, duration: .5 })

        // gsap.timeline({ repeat: 1 })
        //     .to("#icon-moon", { scale: .7 })
        // .to("#sun", { height: 40, width: 40 },
        //     { height: 70, width: 70, duration: 1 })
    }

    // useEffect(() => {

    // }, [])


    return (
        <div className={shadowNav ? 'fixed shadow-md bottom-0 w-full md:sticky md:top-0 z-[999] md:h-[5.5rem]' : 'fixed bottom-0 w-full md:sticky md:top-0 z-[999] md:h-[5.5rem]'}>
            <header className={showMenu
                ? 'rounded-t-xl bg-[color:var(--bg-light)] dark:bg-[color:var(--dark-color)] shadow-custom py-5 md:py-0 z-[999]'
                : 'bg-[color:var(--bg-light)] dark:bg-[color:var(--dark-color)] py-5 md:py-0 z-[999]'}>

                <nav className='flex justify-between md:grid md:grid-cols-[1fr_12fr_1fr] w-full max-w-[370px] md:max-w-[720px] xl:max-w-[1400px] mx-auto'>
                    <a href="" className={showMenu ? 'hidden' : 'flex items-center font-semibold text-lg text-[color:var(--base-color)]'}>
                        Alvin
                    </a>

                    <div className={showMenu ? 'block ease-out duration-1000 w-full mx-auto' : 'hidden md:flex justify-center'}>
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

                        </ul>
                    </div>

                    <div onClick={handleThemeSwitch} className='cursor-pointer hidden md:flex md:items-center md:justify-end'>
                        {
                            theme === 'dark'
                                ? <div id='sun' className='bg-[color:var(--bg-light)] rounded-full w-9 h-9 flex justify-center items-center'>
                                    <UilSun id='icon-sun' className='text-[color:var(--dark-color)]' />
                                </div>
                                : <div id='moon' className='bg-[color:var(--dark-color)] rounded-full w-9 h-9 flex justify-center items-center'>
                                    <UilMoon id='icon-moon' className='text-[color:var(--bg-light)]' />
                                </div>
                        }
                    </div>

                    {/* Navbar in the mobile version */}
                    <div className={showMenu ? 'hidden' : 'flex gap-4 md:hidden'}>
                        <div onClick={handleThemeSwitch} className='cursor-pointer'>
                            {
                                theme === 'dark'
                                    ? <UilSun className='text-white' />
                                    : <UilMoon />
                            }
                        </div>
                        <button onClick={() => setShowMenu(showMenu => !showMenu)}><UilApps /></button>
                    </div>
                </nav>

                <div className={showMenu ? 'flex justify-end pr-5' : 'hidden'}>
                    <button onClick={() => setShowMenu(showMenu => !showMenu)}><UilMultiply /></button>
                </div>
            </header>
        </div>
    )
}

export default Navbar