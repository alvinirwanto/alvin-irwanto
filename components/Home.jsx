import React from 'react'

import { UilMessage } from '@iconscout/react-unicons'
import { UilMouseAlt } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'

// import ProfileImg from '../public/perfil.png'


const Home = () => {
    
    return (
        <div id='home' className='w-full max-w-[1000px] mx-auto'>
            <div className='grid grid-cols-2 gap-3 xl:gap-8 h-full items-center justify-center'>
                <div className='md:px-8 xl:px-[4rem] flex flex-col justify-center col-span-2 md:col-span-1'>
                    <svg className="fill-[color:var(--base-color)] my-[5rem]"
                        viewBox="0 0 200 187"
                        xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />

                            <image href='/profile1.png' className="w-[170px] z-40" x="15" y="-1" />
                        </g>
                    </svg>

                    <div className='animate-bounce flex justify-center items-center gap-4 cursor-pointer'>
                        <UilMouseAlt className='text-[color:var(--base-color)]' />
                        Scroll down
                        <UilArrowDown className='text-[color:var(--base-color)]' />
                    </div>
                </div>


                <div className='flex flex-col justify-center gap-6 col-span-3 py-8 md:py-0 md:col-span-1'>
                    <h1 className='text-4xl xl:text-6xl font-semibold'>Hi, I'm Alvin</h1>
                    <div className='flex items-center gap-4'>
                        <hr className='h-[2px] border-[color:var(--base-color)] bg-[color:var(--base-color)] w-[10%]' />
                        <h2 className='text-lg xl:text-xl font-medium'>Front-End Web Developer</h2>
                    </div>
                    <p className='text-base font-normal mr-0 xl:mr-[5.5rem]'>High level experience in web design and development knowledge, producing quality of work</p>
                    <div className='group flex gap-3 items-center justify-center button-custom w-[50%] md:w-[60%] xl:w-[35%] bg-[color:var(--base-color)] hover:bg-[color:var(--base-color-darker)] text-white'>
                        Let's Talk
                        <span className='-rotate-45 -mt-2 group-hover:transform-none group-hover:mt-0 duration-300'>
                            <UilMessage />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home