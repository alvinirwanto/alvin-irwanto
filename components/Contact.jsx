import React from 'react'
import TitleSection from '../commons/TitleSection'

import { UilMessage } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilEnvelopeAdd } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <div className='section-template pb-[10rem]'>
            <TitleSection title='Contact Me' subtitle='Get in Touch' />

            <div className='grid grid-cols-1 md:grid-cols-[4fr_5fr] xl:grid-cols-2 gap-9 max-w-[1000px]'>

                <div className='flex flex-col items-center'>
                    <h3 className='text-xl font-medium'>Talk to Me</h3>

                    <div className='flex flex-col mt-[3rem] w-[90%] xl:w-[65%] gap-8'>

                        <div className='shadow-custom rounded-xl flex flex-col items-center gap-1 px-8 py-5'>
                            <UilEnvelopeAdd height='30' width='30' />
                            <p className='font-semibold text-base mt-4'>Email</p>
                            <p className='text-gray-500 text-sm text-center'>irwantoalvin@gmail.com</p>
                            <button className='flex items-center text-sm mt-2 font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group'>
                                Write me
                                <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                                    <UilArrowRight />
                                </span>
                            </button>
                        </div>

                        <div className='shadow-custom rounded-xl flex flex-col items-center gap-1 px-8 py-5'>
                            <UilWhatsapp height='30' width='30' />
                            <p className='font-semibold text-base mt-4'>WhatsApp</p>
                            <p className='text-gray-500 text-sm text-center'>+62 882-2577-95xx</p>
                            <button className='flex items-center text-sm mt-2 font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group'>
                                Write me
                                <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                                    <UilArrowRight />
                                </span>
                            </button>
                        </div>

                        <div className='shadow-custom rounded-xl flex flex-col items-center gap-1 px-8 py-5'>
                            <UilMapMarker height='35' width='35' />
                            <p className='font-semibold text-base mt-4'>Location</p>
                            <p className='text-gray-500 text-sm text-center'>Bojong, Kunciran Indah, Pinang, Kota Tangerang, Banten</p>
                            <button className='flex items-center text-sm mt-2 font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group'>
                                Write me
                                <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                                    <UilArrowRight />
                                </span>
                            </button>
                        </div>


                    </div>

                </div>

                <div className='flex flex-col items-center mt-[10rem] md:mt-0'>
                    <h3 className='text-xl font-medium'>Write Me Your Project</h3>

                    <div className='flex flex-col justify-between h-full w-full'>
                        <form action="" className='mt-[3rem] flex flex-col gap-9'>

                            <div className='flex flex-col'>
                                <div className='-mb-3 z-30 w-[50%] ml-4'>
                                    <label className='label-form'>Name</label>
                                </div>
                                <input type="text" placeholder='Input your name' className='input-form' />
                            </div>

                            <div className='flex flex-col'>
                                <div className='-mb-3 z-30 w-[50%] ml-4'>
                                    <label className='label-form'>Email</label>
                                </div>
                                <input type="text" placeholder='Input your email' className='input-form' />
                            </div>

                            <div className='flex flex-col'>
                                <div className='-mb-3 z-30 w-[50%] ml-4'>
                                    <label className='label-form'>Project</label>
                                </div>
                                <textarea rows='10' cols='30' type="text" placeholder='Explain your project' className='input-form' />
                            </div>
                        </form>

                        <div className='mt-9 md:mt-0 group flex gap-3 items-center justify-center button-custom w-[55%] md:w-[60%] xl:w-[45%] bg-[color:var(--base-color)] hover:bg-[color:var(--base-color-darker)] text-white'>
                            Send Message
                            <span className='-rotate-45 -mt-2 group-hover:transform-none group-hover:mt-0 duration-300'>
                                <UilMessage />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact