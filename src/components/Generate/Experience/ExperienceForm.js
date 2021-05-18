import React from 'react'
import Button from '../../Utilities/Button'
import Input from '../../Utilities/Input'
import TextArea from '../../Utilities/TextArea'
import { faCalendarDay, faTrash } from '@fortawesome/free-solid-svg-icons'

const ExperienceForm = (props) => {
    const { data, onChange, setDataPresent, id, remove } = props

    return (
        <div className='experience__form'>
            <Input id={id} title='Company Name' value={data.companyName} onChange={onChange} name='companyName' />
            <Input id={id} title='Role' value={data.role} onChange={onChange} name='role' />
            <Input id={id} title='City' value={data.city} onChange={onChange} name='city' />
            <div className="field-wrapper l-flex l-gap-05">
                <Input id={id} type='date' title='From' value={data.dateFrom} onChange={onChange} name='dateFrom' />
                <Input id={id} type='date' title='To' value={data.dateTo} onChange={onChange} name='dateTo' />
            </div>
            <TextArea id={id} title='Responsibilities'
                value={data.responsibilities}
                onChange={onChange}
                name='responsibilities'
                placeholder='Your tasks and responsibilities'
            />
            <div className="field-buttons l-flex l-gap-05">
                {remove === undefined ? null : <Button className='btn' title={'Remove'} onClick={remove} icon={faTrash} />}
                <Button className='btn' title={'Present'} onClick={setDataPresent} icon={faCalendarDay}/>
            </div>
        </div>
    )
}

export default ExperienceForm
