import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Contact from './Contact'
import Socials from './Socials'
import Experience from './Experience'
import Education from './Education'
import profilePhoto from '../../blankProfile.svg'
import Skills from './Skills'

const Preview = React.forwardRef(({states}, ref) => {
    const { personalData, experience, experienceList, education, educationList, photoFile } = states
    return (
        <div className="preview" ref={ref}>
            <div className="head">
                <img className="head__photo" src={photoFile === null ? profilePhoto : photoFile} alt="" />
                 <Header data={personalData} />
            </div>
            <div className="body">
                <div className="preview__personal l-flexColumn l-gap-1">
                    <Contact data={personalData}/>
                    <Socials data={personalData}/>
                    <Skills data={personalData} />
                </div>
                <div className="preview__details l-flexColumn l-gap-1">
                    <Summary data={personalData} />
                    <Experience data={experience} dataList={experienceList}/>
                    <Education data={education} dataList={educationList}/>
                </div>
            </div>
        </div>
    )
})

export default Preview
