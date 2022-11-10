import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const SkillBadge = (props) => {
    return (
        <div className='flex gap-1'>
            <HiBadgeCheck className='text-2xl xl:pt-1 text-[color:var(--base-color)]' /> 
            <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>{props.skill}</h3>
                <p className='text-sm font-medium text-gray-400'>{props.value}</p>
            </div>
        </div>
    )
}

export default SkillBadge