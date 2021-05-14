import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Contact from './Contact'
import Skills from './Skills'
import Socials from './Socials'

const Preview = ({states}) => {
    const { personalData, experience, education, activeSection } = states
    return (
        <div className="preview l-gap-1">
            <div className="preview__personal">
                <Summary data={personalData}/>
                <Contact data={personalData}/>
                <Socials socialData={personalData}/>
                <Skills data={experience}/>
            </div>
            <div className="preview__details">
                <Header data={personalData} />
                
            </div>
        </div>
    )
}

export default Preview
