import { useEffect, useState } from 'react';

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

export default function Index() {
    const [showButton, setShowButton] = useState(false)

    const addButton = () => {
        window.scrollY >= 500 ? setShowButton(true) : setShowButton(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addButton)
        return () => window.removeEventListener('scroll', addButton);
    })

    return (
        <div className="dark:bg-[color:var(--dark-color)] bg-[color:var(--bg-light)]">

            <Head>
                <title>Portfolio Alvin Irwanto</title>
                <meta name="description" content="Portfolio of Alvin Irwanto" />
                <meta name='keywords' content='portfolio cv alvin irwanto reactjs nextjs' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <div className="dark:text-[color:var(--dark-text)] w-full flex flex-col gap-[5rem] md:gap-[10rem] max-w-[370px] md:max-w-[730px] xl:max-w-[1200px] mx-auto mb-[5rem] md:mb-0">
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

                <div className='hidden xl:block xl:fixed bottom-8 -md:left-1 xl:left-6'>
                    <div className='flex flex-col items-center justify-center gap-7'>
                        <hr className='bg-[color:var(--dark-color)] dark:bg-[#ffffffa8] w-[5rem] rotate-90 my-9' />
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilLinkedinAlt height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilDribbble height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilGithubAlt height='23' width='23' /></Link>
                        <Link href="" className='text-[color:var(--dark-color)] dark:text-[#ffffffa8] hover:text-[color:var(--base-color)] dark:hover:text-[color:var(--base-color)]'><UilInstagram height='23' width='23' /></Link>
                    </div>
                </div>

                <button className={showButton
                    ? 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed bottom-[6rem] right-3 md:bottom-8 md:right-8 duration-300 z-[99] hover:animate-bounce '
                    : 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed -bottom-[3rem] right-3 md:right-8 duration-300 z-888 '}>
                    <UilArrowUp />
                </button>
            </main>
        </div>
    );
}
