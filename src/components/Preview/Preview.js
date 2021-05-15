import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Contact from './Contact'
import Socials from './Socials'
import Experience from './Experience'
import Education from './Education'

const Preview = ({states}) => {
    const { personalData, experience, experienceList, education, educationList, activeSection } = states
    return (
        <div className="preview l-gap-1">
            <div className="preview__personal">
                <Summary data={personalData}/>
                <Contact data={personalData}/>
                <Socials socialData={personalData}/>
            </div>
            <div className="preview__details">
                <Header data={personalData} />
                <Experience data={experience} dataList={experienceList}/>
                <Education data={education} dataList={educationList}/>
            </div>
        </div>
    )
}

export default Preview
