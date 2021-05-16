import React from 'react'
import uniqid from "uniqid";

const Experience = ({ data, dataList }) => {

    const WorkList = () => {
        return (
            dataList.map(work => <Work key={uniqid()} workData={work} />)
        )
    }

    const Work = (props) => {
        const { companyName, city, role, dateFrom, dateTo, responsibilities } = props.workData;

        return (
            <div className={props.className}>
                <p>{companyName}</p>
                <p>{city}</p>
                <p>{role}</p>
                <p>{dateFrom} - {dateTo}</p>
                <p>{responsibilities}</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Experience</h2>
            <WorkList />
            <Work workData={data}/>
        </div>
    )
}

export default Experience
