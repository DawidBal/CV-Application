import React from 'react'
import Button from '../Utilities/Button'
import Input from '../Utilities/Input'
import TextArea from '../Utilities/TextArea'


const Education = (props) => {
    const { setData, data, updateData, submit } = props
    return (
        <div className="Education">
            <h3>Education</h3>
            <Input title='School Name' value={data.school} onChange={(e) => updateData(e, setData, data)} id='school' />
            <Input title='City' value={data.city} onChange={(e) => updateData(e, setData, data)} id='city' />
            <Input title='Degree' value={data.role} onChange={(e) => updateData(e, setData, data)} id='degree' />
            <Input type="date" title='From' value={data.dateFrom} onChange={(e) => updateData(e, setData, data)} id='dateFrom' />
            <Input type="date" title='To' value={data.dateTo} onChange={(e) => updateData(e, setData, data)} id='dateTo' />
            <Button className="btn" title="+ Add" onClick={submit} />
        </div>
    )
}

export default Education
