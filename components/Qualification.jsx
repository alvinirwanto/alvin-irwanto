import React, { useState } from 'react'
import TitleSection from '../commons/TitleSection'

import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilFileLandscapeAlt } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import ItemQualification from '../commons/ItemQualification'
import PointQualification from '../commons/PointQualification'

const Qualification = () => {

    const [showData, setShowData] = useState(1)

    return (
        <div className='section-template'>
            <TitleSection title='Qualification' subtitle='My Personal Journey' />

            <div className='flex justify-around gap-[3rem] items-center'>
                <div onClick={() => setShowData(1)} className={showData === 1 ? 'tab-qualification-active' : 'tab-qualification'}>
                    <UilGraduationCap height='27' width='27' />
                    <p>Education</p>
                </div>

                <div onClick={() => setShowData(2)} className={showData === 2 ? 'tab-qualification-active' : 'tab-qualification'}>
                    <UilFileLandscapeAlt height='27' width='27' />
                    <p>Certification</p>
                </div>

                <div onClick={() => setShowData(3)} className={showData === 3 ? 'tab-qualification-active' : 'tab-qualification'}>
                    <UilBriefcaseAlt />
                    <p>Work</p>
                </div>
            </div>

            <div className='flex justify-center items-center mt-8 mx-4'>

                <div className={showData === 1 ? 'grid grid-cols-[5fr_2fr_5fr] mx-auto mt-[3rem]' : 'hidden'}>

                    <ItemQualification title='Sains Class' subtitle='MAN 10 Jakarta' date='2016 - 2018' />
                    <PointQualification />

                    <div></div>
                    <div></div>

                    <PointQualification />
                    <ItemQualification title='Informatics' subtitle='Universitas Mercu Buana' date='2018 - 2022' />

                </div>

                <div className={showData === 2 ? 'grid grid-cols-[5fr_2fr_5fr] mx-auto mt-[3rem]' : 'hidden'}>
                    <ItemQualification title='Belajar Dasar Pemrograman Web' subtitle='Dicoding' date='Until 3 Juni 2025' />
                    <PointQualification />
                    <div></div>

                    <div></div>
                    <PointQualification />
                    <ItemQualification title='Belajar Dasar Pemrograman JavaScript' subtitle='Dicoding' date='Until 28 Juni 2025' />

                    <ItemQualification title='Belajar Membuat Front-End Web untuk Pemula' subtitle='Dicoding' date='Until 21 Juli 2025' />
                    <PointQualification />
                    <div></div>

                    <div></div>
                    <PointQualification />
                    <ItemQualification title='Belajar Membuat Aplikasi Web dengan React' subtitle='Dicoding' date='Until 06 Agustus 2025' />
                </div>

                <div className={showData === 3 ? 'grid grid-cols-[5fr_2fr_5fr] mx-auto mt-[3rem]' : 'hidden'}>
                    <ItemQualification title='Web Developer Intern' subtitle='Jakarta Creative Hub' date='Feb 2021 - Apr 2021' />
                    <PointQualification />

                    <div></div>
                    <div></div>

                    <PointQualification />
                    <ItemQualification title='Frontend Web Developer Intern' subtitle='PT Max Solution Indonesia' date='Apr 2022 - Now' />
                </div>
            </div>
        </div>
    )
}

export default Qualification