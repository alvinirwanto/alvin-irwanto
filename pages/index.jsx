import { useEffect, useRef, useState } from 'react';

import Head from 'next/head'
import Link from 'next/link';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";

import { UilArrowUp } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'


import Qualification from "../components/Qualification";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import gsap from 'gsap';

import { motion } from "framer-motion"

export default function Index() {
    const [showButton, setShowButton] = useState(false)

    const addButton = () => {
        window.scrollY >= 500 ? setShowButton(true) : setShowButton(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addButton)
        return () => window.removeEventListener('scroll', addButton);
    })

    // const navbar = useRef()

    useEffect(() => {
        // gsap.fromTo('#navbar', { x: 700, y: 0 },
        //     { x: 0, y: 0, duration: 1.5, ease: "power2.out" })

        // gsap.fromTo('#navbar', { boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" },
        //     { boxShadow: "transparent 0px 4px 12px", duration: 4, ease: "power2.out" })


        // gsap.fromTo('#social-icons', { y: 200 }, { y: 0, duration: 1.5, ease: "power2.out" })

        // gsap.fromTo('#social-email', { y: -200 }, { y: 0, duration: 1.5, ease: "power2.out" })

    }, [])

    return (
        <div className="dark:bg-[color:var(--dark-color)] bg-[color:var(--bg-light)] overflow-hidden">

            <Head>
                <title>Portfolio Alvin Irwanto</title>
                <meta name="description" content="Portfolio of Alvin Irwanto" />
                <meta name='keywords' content='portfolio cv alvin irwanto reactjs nextjs' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <motion.div
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    className='md:fixed md:w-full md:top-0 z-[999] md:h-[5.5rem]'>
                    <Navbar />
                </motion.div>

                <div className="container w-full flex flex-col gap-[5rem] md:gap-[10rem] max-w-[370px] md:max-w-[730px] xl:max-w-[1200px] mx-auto mb-[5rem] md:mb-0 dark:text-[color:var(--dark-text)] ">
                    <Home />
                    <About />
                    <Skills />
                    <Qualification />
                    <Services />
                    <Portfolio />
                    <Testimonial />
                    <Contact />
                </div>
                <Footer />


                <motion.div
                    className='hidden xl:block xl:fixed bottom-[5rem] -md:left-1 xl:left-6'
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}>

                    <div className='flex flex-col items-center justify-center gap-7'>
                        <hr className='bg-[color:var(--dark-color)] dark:bg-[#ffffffa8] w-[5rem] rotate-90 my-9' />
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilLinkedinAlt height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilDribbble height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilGithubAlt height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilInstagram height='23' width='23' /></Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}

                    className='hidden xl:block xl:fixed top-[15rem] -md:right-1 xl:right-6'>
                    <div className='flex justify-center items-center gap-2 rotate-90 -mr-[6rem]'>
                        <hr className='bg-[color:var(--dark-color)] dark:bg-[#ffffffa8] w-[5rem] my-9' />
                        <p className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] my-9'>irwantoalvin@gmail.com</p>
                    </div>
                </motion.div>

                <button className={showButton
                    ? 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed bottom-[6rem] right-3 md:bottom-8 md:right-8 duration-300 z-[99] hover:animate-bounce '
                    : 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed -bottom-[3rem] right-3 md:right-8 duration-300 z-888 '}>
                    <UilArrowUp />
                </button>
            </main>
        </div>
    );
}
