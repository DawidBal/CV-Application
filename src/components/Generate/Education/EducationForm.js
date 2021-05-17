import React from 'react'
import Button from '../../Utilities/Button'
import Input from '../../Utilities/Input'
import { faCalendarDay, faTrash } from '@fortawesome/free-solid-svg-icons'

const EducationForm = (props) => {
    const { data, onChange, setDataPresent, id, remove } = props
    return (
        <div className='education__form'>
            <Input id={id} title='School Name' value={data.school} onChange={onChange} name='school' />
            <Input id={id} title='City' value={data.city} onChange={onChange} name='city' />
            <Input id={id} title='Degree' value={data.degree} onChange={onChange} name='degree' />
            <Input id={id} type='date' title='From' value={data.dateFrom} onChange={onChange} name='dateFrom' />
            <Input id={id} type='date' title='To' value={data.dateTo} onChange={onChange} name='dateTo' />
            {remove === undefined ? null : <Button className='btn' title={'Remove'} onClick={remove} icon={faTrash} />}
            <Button className='btn' title={'Present'} onClick={setDataPresent} icon={faCalendarDay} />
        </div>
    )
}

export default EducationForm
