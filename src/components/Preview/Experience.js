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
            <div className="preview__experience l-flexColumn l-gap-05">
                <p className="text">{companyName}</p>
                <p className="text">{city}</p>
                <p className="text">{role}</p>
                <p className="text">{dateFrom} - {dateTo}</p>
                <p className="text">{responsibilities}</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="title">Experience</h2>
            <WorkList />
            <Work workData={data}/>
        </div>
    )
}

export default Experience
