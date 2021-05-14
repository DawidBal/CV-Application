import React from 'react'
import Button from '../Utilities/Button'
import Input from '../Utilities/Input'

const Experience = (props) => {
    const { setData, data, updateData, submit } = props
    return (
        <div className="experience">
            <Input title='Company Name' value={data.companyName} onChange={(e) => updateData(e, setData, data)} id='companyName' />
            <Input title='City' value={data.city} onChange={(e) => updateData(e, setData, data)} id='city' />
            <Input title='Role' value={data.data} onChange={(e) => updateData(e, setData, data)} id='role' />
            <Input type="date" title='From' value={data.dateFrom} onChange={(e) => updateData(e, setData, data)} id='dateFrom' />
            <Input type="date" title='To' value={data.dateTo} onChange={(e) => updateData(e, setData, data)} id='dateTo' />
            <Input title='Responsibilities' value={data.responsibilities} onChange={(e) => updateData(e, setData, data)} id='responsibilities' />
            <Button className="btn" title="+ Add" onClick={submit} />
        </div>
    )
}

export default Experience
