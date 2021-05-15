import React from 'react'
import uniqid from "uniqid";

const Education = ({ data, dataList }) => {

    const EducationList = () => {
        return (
            dataList.map(work => <Education key={uniqid()} EducationData={work} className="Dynamic" />)
        )
    }

    const Education = (props) => {
        const { school, city, role, dateFrom, dateTo } = props.EducationData;

        return (
            <div className={props.className}>
                <p>{school}</p>
                <p>{city}</p>
                <p>{role}</p>
                <p>{dateFrom} - {dateTo}</p>
            </div>
        )
    }


    return (
        <div>
            <h2>Education</h2>
            <EducationList />
            <Education EducationData={data} className="Static" />
        </div>
    )
}

export default Education
