import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Contact from './Contact'
import Socials from './Socials'
import Experience from './Experience'
import Education from './Education'
import profilePhoto from '../../blankProfile.svg'
import Skills from './Skills'

const Preview = ({states}) => {
    const { personalData, experience, experienceList, education, educationList } = states
    return (
        <div className="preview">
            <div className="head">
                <img className="head__photo" src={profilePhoto} alt="" />
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
}

export default Preview
