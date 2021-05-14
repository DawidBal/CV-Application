import React from 'react'
import Input from '../Utilities/Input'

const PersonalData = (props) => {

    const { setData, data } = props

    Input.defaultProps = {
        type: 'text'
    };

    // Update personal data based on input id field
    const updateData = (e) => {
        const key = e.target.attributes.id.value;
        const newName = { ...data, [key]: e.target.value }
        setData(newName);
    }

    return (
        <div>
            <Input title='First Name' value={data.firstName} onChange={updateData} id='firstName' />
            <Input title='Last Name' value={data.lastName} onChange={updateData} id='lastName' />
            <Input title='Role' value={data.role} onChange={updateData} id='role' />
            <Input title='Address' value={data.address} onChange={updateData} id='address' />
            <Input type='tel' title='Phone Number' value={data.phone} onChange={updateData} id='phone' />
            <Input type='email' title='Email' value={data.email} onChange={updateData} id='email' />
        </div>
    )
}

export default PersonalData
