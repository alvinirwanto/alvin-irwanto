import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImageProfile from '../public/profile.jpg'

import { UilAwardAlt } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import { UilHeadphonesAlt } from '@iconscout/react-unicons'
import { UilDownloadAlt } from '@iconscout/react-unicons'

import TitleSection from '../commons/TitleSection'
// import CV from '../static/John-Cv.pdf'

const About = () => {
    return (
        <div className='section-template' id='about'>
            <TitleSection title='About Me' subtitle='My Introduction' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[3rem]'>

                <div className='flex items-start justify-end xl:mr-4'>
                    <Image src={ImageProfile} alt="" className='object-cover rounded-xl h-[27rem] w-[25rem] hover:shadow-2xl xl:hover:scale-105 duration-200' />
                </div>


                <div className='flex flex-col justify-start gap-8 xl:mr-[3rem]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-2 xl:gap-4'>
                        <div className='box-info'>
                            <UilAwardAlt height='25' width='35' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>8+ Years</p>
                            <p className='text-xs text-gray-500'>Experience</p>
                        </div>
                        <div className='box-info'>
                            <UilSuitcaseAlt height='25' width='25' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>10+ Projects</p>
                            <p className='text-xs text-gray-500'>Completed</p>
                        </div>
                        <div className='box-info'>
                            <UilHeadphonesAlt height='25' width='25' className='mb-4' />
                            <p className='font-medium text-base xl:text-lg'>Online 24/7</p>
                            <p className='text-xs text-gray-500'>Support</p>
                        </div>
                    </div>
                    <p>Frontend developer, I created web pages with beautiful UI/UX, I have years of experience
                        and many clients are happy with the project carried out
                    </p>
                    <a href='/John-Cv.pdf' target="_blank" className='button-custom group bg-[color:var(--base-color)] hover:bg-[color:var(--base-color-darker)] text-white w-[50%] md:w-[60%] xl:w-[37%] flex items-center justify-center gap-2'>
                        Download CV
                        <span className='group-hover:animate-bounce'>
                            <UilDownloadAlt />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About