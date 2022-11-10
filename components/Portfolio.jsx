import React, { useState, useEffect } from 'react'
import PortfolioItem from '../commons/PortfolioItem'
import TitleSection from '../commons/TitleSection'

import { projectsData } from '../data/DataPortfolio'
import { projectsNav } from '../data/DataPortfolio'

const Portfolio = () => {

    const [item, setItem] = useState({ name: 'All' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'All') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        setActive(index)
    }

    return (
        <div className='section-template'>
            <TitleSection title='Portfolio' subtitle='Most Recent Works' />

            <div className='flex justify-between gap-8 text-base font-medium'>
                {
                    projectsNav.map((item, index) => {
                        return (
                            <div key={index}
                                onClick={(e) => {
                                    handleClick(e, index)
                                }}
                                className={active === index? 'px-3 py-1 rounded-md bg-[color:var(--base-color)] text-white' :'cursor-pointer px-3 py-1 rounded-md hover:bg-[color:var(--base-color)] hover:text-white'}>
                                <p>{item.name}</p>
                            </div>

                        )
                    })
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 max-w-[1000px] gap-6'>
                {
                    projects.map((item) => {
                        return <PortfolioItem item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio