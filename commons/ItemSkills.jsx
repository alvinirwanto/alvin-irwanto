import React from 'react'
import Image from 'next/image'

const ItemSkills = (props) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center rounded-md px-9 py-6 shadow-md hover:shadow-xl hover:scale-110 duration-200 group cursor-pointer'>
            <Image src={props.logo} width={200} height={200} className='w-[6rem] h-auto grayscale group-hover:grayscale-0' />
            <p className='opacity-40 group-hover:opacity-100 duration-300 font-medium'>{props.title}</p>
        </div>
    )
}

export default ItemSkills