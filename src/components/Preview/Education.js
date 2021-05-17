import React from 'react'
import uniqid from "uniqid";

const Education = ({ data, dataList }) => {

    const EducationList = () => {
        return (
            dataList.map(work => <Education key={uniqid()} EducationData={work} />)
        )
    }

    const Education = (props) => {
        const { school, city, degree, dateFrom, dateTo } = props.EducationData;

        return (
            <div className="preview__education l-flexColumn l-gap-05">
                <p className="text">{school}</p>
                <p className="text">{city}</p>
                <p className="text">{degree}</p>
                <p className="text">{dateFrom} - {dateTo}</p>
            </div>
        )
    }


    return (
        <div>
            <h2 className="title">Education</h2>
            <EducationList />
            <Education EducationData={data} />
        </div>
    )
}

export default Education
