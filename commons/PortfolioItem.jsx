import React from 'react'
import Image from 'next/image'

import { UilArrowRight } from '@iconscout/react-unicons'

const PortfolioItem = ({ item }) => {
    return (
        <div key={item.id} className='flex flex-col gap-2 shadow-md hover:shadow-lg py-7 px-5 rounded-md' >
            <Image src={item.image} alt="image" className='rounded-md' />
            <p className='font-semibold mt-4'>{item.title}</p>
            <button className='flex items-center text-base font-medium gap-1 text-gray-400 hover:text-gray-500 md:text-sm group xl:w-[60%]'>
                View More
                <span className='pb-[1px] duration-300 group-hover:ml-1 group-hover:pb-[1px]'>
                    <UilArrowRight />
                </span>
            </button>
        </div>
    )
}

export default PortfolioItem