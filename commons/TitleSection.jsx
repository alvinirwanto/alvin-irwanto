import React from 'react'

const TitleSection = (props) => {
    return (
        <div className='flex flex-col items-center mb-[4rem]'>
            <h1 className='text-3xl font-semibold'>{props.title}</h1>
            <p className='text-gray-400'>{props.subtitle}</p>
        </div>
    )
}

export default TitleSection