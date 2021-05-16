import React from 'react'
import Input from '../../Utilities/Input'
import TextArea from '../../Utilities/TextArea'

const ExperienceForm = (props) => {
    const { data, onChange, id } = props
    return (
        <div className="experience__form">
            <Input id={id} title='Company Name' value={data.companyName} onChange={onChange} name='companyName' />
            <Input id={id} title='City' value={data.city} onChange={onChange} name='city' />
            <Input id={id} title='Role' value={data.role} onChange={onChange} name='role' />
            <Input id={id} type="date" title='From' value={data.dateFrom} onChange={onChange} name='dateFrom' />
            <Input id={id} type="date" title='To' value={data.dateTo} onChange={onChange} name='dateTo' />
            <TextArea id={id} title='Responsibilities'
                value={data.responsibilities}
                onChange={onChange}
                name='responsibilities'
                placeholder="Your tasks and responsibilities"
            />
        </div>
    )
}

export default ExperienceForm
