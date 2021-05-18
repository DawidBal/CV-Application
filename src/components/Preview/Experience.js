import React from 'react'

const Experience = ({ data, dataList }) => {

    const WorkList = () => {
        return (
            dataList.map((work, index) => <Work key={index} workData={work} />)
        )
    }

    const Work = (props) => {
        const { companyName, city, role, dateFrom, dateTo, responsibilities } = props.workData;

        return (
            <div className="preview__experience l-flexColumn">
                <p className="text name">{companyName}</p>
                <p className="text role">{role}</p>
                <p className="text city">{city}</p>
                <p className="text date">{dateFrom} - {dateTo}</p>
                <p className="text responsibility">{responsibilities}</p>
            </div>
        )
    }

    return (
        <div className="l-flexColumn l-gap-1">
            <h2 className="title">Experience</h2>
            <WorkList />
            <Work workData={data}/>
        </div>
    )
}

export default Experience
