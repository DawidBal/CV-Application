import React from 'react'
import uniqid from "uniqid";

const WorkExperience = ({data, dataList}) => {

    const WorkList = () => {
        return (
            dataList.map(work => <Work key={uniqid()} workData={work} className="Dynamic" />)
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
            <WorkList />
            <Work workData={data} className="Static"/>
        </div>
    )
}

export default WorkExperience
