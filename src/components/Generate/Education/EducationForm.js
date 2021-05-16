import React from 'react'
import Input from '../../Utilities/Input'

const EducationForm = (props) => {
    const { data, onChange } = props
    return (
        <div className="education__form">
            <Input title='School Name' value={data.school} onChange={onChange} name='school' />
            <Input title='City' value={data.city} onChange={onChange} name='city' />
            <Input title='Degree' value={data.degree} onChange={onChange} name='degree' />
            <Input type="date" title='From' value={data.dateFrom} onChange={onChange} name='dateFrom' />
            <Input type="date" title='To' value={data.dateTo} onChange={onChange} name='dateTo' />
        </div>
    )
}

export default EducationForm
