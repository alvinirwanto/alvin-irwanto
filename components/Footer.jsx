import React from 'react'
import TitleSection from '../commons/TitleSection'

import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className='index section-template shadow-custom py-[5rem] bg-[color:var(--base-color-softer)]'>
            <div className='flex flex-col gap-8 text-center justify-center items-center'>
                <h3 className='text-3xl text-white font-semibold'>Alvin</h3>
                <div className='flex gap-8 text-medium text-lg text-white'>
                    <a href="">Home</a>
                    <a href="">Skills</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                </div>
                <div className='flex gap-4'>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer hover:scale-110 duration-300 hover:shadow-xl'>
                        <UilLinkedinAlt />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer hover:scale-110 duration-300 hover:shadow-xl'>
                        <UilDribbble />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer hover:scale-110 duration-300 hover:shadow-xl'>
                        <UilGithubAlt />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer hover:scale-110 duration-300 hover:shadow-xl'>
                        <UilInstagram />
                    </div>
                </div>
            </div>
            <p className='mt-[5rem] text-gray-200'>© Alvin. All right reserved</p>
        </div>
    )
}

export default Footer