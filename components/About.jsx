import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImageProfile from '../public/profile.jpg'

import { UilAwardAlt } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import { UilHeadphonesAlt } from '@iconscout/react-unicons'
import { UilDownloadAlt } from '@iconscout/react-unicons'

import TitleSection from '../commons/TitleSection'

import { motion, useTransform, useScroll } from "framer-motion";
// import CV from '../static/John-Cv.pdf'

const About = () => {

    //for creating effect opacity

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: .5 }}
            // animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: .3 }}
            className='section-template max-w-[1000px] mx-auto -mt-[13rem]'>

            <motion.div
                initial={{ x: 700, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: .1 }}
                transition={{ ease: 'easeOut', duration: .3, delay: .5 }}
            >
                <TitleSection title='About Me' subtitle='My Introduction' />
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[3rem]'>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: .1 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .5 }}
                    className='flex items-start justify-end xl:mr-4'>
                    <Image src={ImageProfile} alt="profile" className='object-cover rounded-xl h-[27rem] w-[25rem] hover:shadow-2xl xl:hover:scale-105 duration-200' />
                </motion.div>


                <div className='flex flex-col justify-start gap-8 xl:mr-[3rem]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-2 xl:gap-4'>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: .1 }}
                            transition={{ ease: "easeOut", duration: .5, delay: .5 }}
                            className='box-info'>
                            <UilAwardAlt height='25' width='35' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>8+ Years</p>
                            <p className='text-xs text-gray-500'>Experience</p>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: .1 }}
                            transition={{ ease: "easeOut", duration: .5, delay: .7 }}
                            className='box-info'>
                            <UilSuitcaseAlt height='25' width='25' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>10+ Projects</p>
                            <p className='text-xs text-gray-500'>Completed</p>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: .1 }}
                            transition={{ ease: "easeOut", duration: .5, delay: .9 }}
                            className='box-info'>
                            <UilHeadphonesAlt height='25' width='25' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>Online 24/7</p>
                            <p className='text-xs text-gray-500'>Support</p>
                        </motion.div>

                    </div>
                    <motion.p
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: .1 }}
                        transition={{ ease: "easeOut", duration: .5, delay: 1 }}
                    >Frontend developer, I created web pages with beautiful UI/UX, I have years of experience
                        and many clients are happy with the project carried out
                    </motion.p>

                    <motion.a
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: .1 }}
                        transition={{ ease: "easeOut", duration: .5, delay: 1 }}
                        href='/John-Cv.pdf' target="_blank" className='button-custom group bg-[color:var(--base-color)] hover:bg-[color:var(--base-color-darker)] text-white w-[50%] md:w-[60%] xl:w-[50%] flex items-center justify-center gap-2'>
                        Download CV
                        <span className='group-hover:animate-bounce'>
                            <UilDownloadAlt />
                        </span>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}

export default About