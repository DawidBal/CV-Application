import React from 'react'
import PersonalData from './PersonalData';
import Education from './Education/Education'
import Experience from './Experience/Experience';

const Generator = ({states}) => {
    const { 
        personalData,
        setPersonalData,
        experience,
        setExperience,
        experienceList,
        setExperienceList,
        education,
        setEducation,
        educationList,
        setEducationList,
        activeSection,
        submitExperience,
        submitEducation,
    } = states

    // Get key of object with name attribute, change that key value with input event and update state
    const updateData = (e, setData, data) => {
        const key = e.target.attributes.name.value;
        const newName = { ...data, [key]: e.target.value }
        setData(newName);
    }

    // Get key of object with name attribute, change that key value with input event, make copy of state array and update with new data
    const updateListData = (e, data, dataList, setDataList, index) => {
        const key = e.target.attributes.name.value;
        const newName = { ...data, [key]: e.target.value }
        const newArr = [...dataList];
        newArr.splice(index, 1, newName);
        setDataList(newArr);
    }

    const removeData = (dataList, setDataList, index) => {
        const newArr = [...dataList];
        newArr.splice(index, 1);
        setDataList(newArr);
    }

    const setObjData = (data, setData) => {
        const newDate = { ...data, 'dateTo': "Present" }
        setData(newDate);
    }

    const setObjDataInArr = (index, data, dataList, setDataList) => {
        const newDate = { ...data, 'dateTo': "Present" }
        const newArr = [...dataList];
        newArr.splice(index, 1, newDate);
        setDataList(newArr);
    }

    const renderActiveSection = () => {
        if (activeSection.personal) {
            return <PersonalData updateData={updateData} setData={setPersonalData} data={personalData} />
        } else if (activeSection.education) {
            return <Education updateData={updateData} updateListData={updateListData}
                setData={setEducation} data={education} setDataList={setEducationList}
                dataList={educationList} submit={submitEducation} remove={removeData} setObjData={setObjData} setObjDataInArr={setObjDataInArr}/>
        } else if (activeSection.experience) {
            return <Experience updateData={updateData} updateListData={updateListData}
                setData={setExperience} data={experience} setDataList={setExperienceList}
                dataList={experienceList} submit={submitExperience} remove={removeData} setObjData={setObjData} setObjDataInArr={setObjDataInArr}/>
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
