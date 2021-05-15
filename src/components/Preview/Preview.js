import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Contact from './Contact'
import Socials from './Socials'
import WorkExperience from './WorkExperience'

const Preview = ({states}) => {
    const { personalData, experience, education, activeSection, experienceList } = states
    return (
        <div className="preview l-gap-1">
            <div className="preview__personal">
                <Summary data={personalData}/>
                <Contact data={personalData}/>
                <Socials socialData={personalData}/>
            </div>
            <div className="preview__details">
                <Header data={personalData} />
                <WorkExperience data={experience} dataList={experienceList}/>
            </div>
        </div>
    )
}

export default Preview
