import React from 'react'
import PersonalData from './PersonalData';
import Education from './Education'
import Experience from './Experience';
import Additionals from './Additionals';



const Generator = ({states}) => {

    const { 
        personalData,
        setPersonalData,
        experience,
        setExperience,
        education,
        setEducation,
        additional,
        setAdditional,
        activeSection, 
    } = states

    const renderActiveSection = (activeSection) => {
        if (activeSection.personal) {
            return <PersonalData setData={setPersonalData} data={personalData} />
        } else if (activeSection.education) {
            return <Education setData={setEducation} data={education} />
        } else if (activeSection.experience) {
            return <Experience setData={setExperience} data={experience} />
        } else {
            <Additionals setData={setAdditional} data={additional} />
        }
    }

    return (
        <div className="generator">
            <h2 className="generator__title">Insert data to generate CV</h2>
            {renderActiveSection(activeSection)}
        </div>
    )

   
}

export default Generator
