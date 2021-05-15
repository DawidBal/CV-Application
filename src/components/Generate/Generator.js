import React from 'react'
import PersonalData from './PersonalData';
import Education from './Education'
import Experience from './Experience';



const Generator = ({states}) => {
    const { 
        personalData,
        setPersonalData,
        experience,
        setExperience,
        education,
        setEducation,
        activeSection,
        submitExperience,
    } = states
    // Update data based on input id field and dataObj
    const updateData = (e, setData, data) => {
        const key = e.target.attributes.id.value;
        const newName = { ...data, [key]: e.target.value }
        setData(newName);
    }

    const renderActiveSection = () => {
        if (activeSection.personal) {
            return <PersonalData updateData={updateData} setData={setPersonalData} data={personalData} />
        } else if (activeSection.education) {
            return <Education updateData={updateData} setData={setEducation} data={education} />
        } else if (activeSection.experience) {
            return <Experience updateData={updateData} setData={setExperience} data={experience} submit={submitExperience} />
        }
    }

    return (
        <div className="generator">
            <h2 className="generator__title">Insert data to generate CV</h2>
            {renderActiveSection()}
        </div>
    )

   
}

export default Generator
