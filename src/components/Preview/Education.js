import React from 'react'

const Education = ({ data, dataList }) => {

    const EducationList = () => {
        return (
            dataList.map((work, index) => <Education key={index} EducationData={work} />)
        )
    }

    const Education = (props) => {
        const { school, city, degree, dateFrom, dateTo } = props.EducationData;

        return (
            <div className="preview__education l-flexColumn">
                <p className="text name">{school}</p>
                <p className="text degree">{degree}</p>
                <p className="text city">{city}</p>
                <p className="text date">{dateFrom} - {dateTo}</p>
            </div>
        )
    }


    return (
        <div className="l-flexColumn l-gap-1">
            <h2 className="title">Education</h2>
            <EducationList />
            <Education EducationData={data} />
        </div>
    )
}

export default Education
