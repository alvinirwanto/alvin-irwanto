import React, { useState } from 'react'
import TitleSection from '../commons/TitleSection'

import { UilWebGrid } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilPen } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'

import ModalServices from '../commons/ModalServices'


const Services = () => {
    const [showModal, setShowModal] = useState(0)

    const toggleModal = (index) => {
        setShowModal(index)
    }

    return (
        <div className='section-template'>
            <TitleSection title='Services' subtitle='What I Offer' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                <div className='box-services'>
                    <UilArrow height='30' width='30' className='mb-2 text-[color:var(--base-color)]' />
                    <h3 className='text-2xl md:text-xl font-semibold'>Frontend <br /> Developer</h3>
                    <button onClick={() => toggleModal(1)} className='flex items-center text-lg font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group xl:w-[60%]'>
                        View More
                        <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                            <UilArrowRight />
                        </span>
                    </button>
                    <div className={showModal === 1 ? 'fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#00000080] w-screen h-screen flex justify-center items-center' : 'hidden'}>
                        <div className='bg-white dark:bg-[color:var(--dark-color)] rounded-xl px-[3rem] pb-[4rem] py-[3rem] w-[90vw] md:w-[60vw] xl:w-[35vw]'>
                            <div onClick={() => setShowModal(true)} className='flex justify-end cursor-pointer text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] mb-8'>
                                <UilMultiply />
                            </div>
                            <ModalServices
                                title='Frontend Developer'
                                desc='Services more than 1 year of experience, always try to provide quality work to clients and companies'
                                check1='Develop the User Interface'
                                check2='Web page development'
                                check3='Create UX element interaction'
                            />
                        </div>
                    </div>
                </div>


                <div className='box-services'>
                    <UilWebGrid height='30' width='30' className='mb-2 text-[color:var(--base-color)]' />
                    <h3 className='text-2xl md:text-xl font-semibold'>UI/UX <br /> Designer</h3>
                    <button onClick={() => toggleModal(2)} className='flex items-center text-lg font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group xl:w-[60%]'>
                        View More
                        <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                            <UilArrowRight />
                        </span>
                    </button>
                    <div className={showModal === 2 ? 'fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#00000080] w-screen h-screen flex justify-center items-center' : 'hidden'}>
                        <div className=' bg-white dark:bg-[color:var(--dark-color)] rounded-xl px-[3rem] pb-[4rem] py-[3rem] w-[90vw] md:w-[60vw] xl:w-[35vw]'>
                            <div onClick={() => setShowModal(true)} className='flex justify-end cursor-pointer text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] mb-8'>
                                <UilMultiply />
                            </div>
                            <ModalServices
                                title='UI/UX Designer'
                                desc='Services more than 1 year of experience, always try to provide quality work to clients and companies'
                                check1='Develop the User Interface'
                                check2='Web page development'
                                check3='Create UX element interaction'
                            />
                        </div>
                    </div>
                </div>


                <div className='box-services'>
                    <UilPen height='30' width='30' className='mb-2 text-[color:var(--base-color)]' />
                    <h3 className='text-2xl md:text-xl font-semibold'>Branding <br /> Designer</h3>
                    <button onClick={() => toggleModal(3)} className='flex items-center text-lg font-medium gap-1 text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] md:text-sm group xl:w-[60%]'>
                        View More
                        <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                            <UilArrowRight />
                        </span>
                    </button>
                    <div className={showModal === 3 ? 'fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#00000080] w-screen h-screen flex justify-center items-center' : 'hidden'}>
                        <div className=' bg-white dark:bg-[color:var(--dark-color)] rounded-xl px-[3rem] pb-[4rem] py-[3rem] w-[90vw] md:w-[60vw] xl:w-[35vw]'>
                            <div onClick={() => setShowModal(true)} className='flex justify-end cursor-pointer text-[color:var(--base-color)] hover:text-[color:var(--base-color-darker)] mb-8'>
                                <UilMultiply />
                            </div>
                            <ModalServices
                                title='Branding Designer'
                                desc='Services more than 1 year of experience, always try to provide quality work to clients and companies'
                                check1='Develop the User Interface'
                                check2='Web page development'
                                check3='Create UX element interaction'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Services