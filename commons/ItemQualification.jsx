import React from 'react'
import { UilSchedule } from '@iconscout/react-unicons'

const ItemQualification = (props) => {
    return (
        <div className='flex justify-center max-w-[250px] break-words'>
            <div className='flex flex-col items-start gap-2 -mt-1.5'>
                <h3 className='text-lg font-medium'>{props.title}</h3>
                <p className='text-sm font-normal text-gray-500'>{props.subtitle}</p>
                <div className='flex items-center gap-2 text-xs font-normal text-gray-500'>
                    <UilSchedule />
                    {props.date}
                </div>
            </div>
        </div>
    )
}

export default ItemQualification