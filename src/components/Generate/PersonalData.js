import React from 'react'
import Input from '../Utilities/Input'

const PersonalData = (props) => {

    const { setData, data, updateData } = props

    Input.defaultProps = {
        type: 'text'
    };

    return (
        <div>
            <h3>Personal Data</h3>
            <Input title='First Name' value={data.firstName} onChange={(e) => updateData(e, setData, data)} id='firstName' />
            <Input title='Last Name' value={data.lastName} onChange={(e) => updateData(e, setData, data)} id='lastName' />
            <Input title='Role' value={data.role} onChange={(e) => updateData(e, setData, data)} id='role' />
            <Input title='Address' value={data.address} onChange={(e) => updateData(e, setData, data)} id='address' />
            <Input type='tel' title='Phone Number' value={data.phone} onChange={(e) => updateData(e, setData, data)} id='phone' />
            <Input type='email' title='Email' value={data.email} onChange={(e) => updateData(e, setData, data)} id='email' />
            <h3>Socials</h3>
            <Input title='Facebook' value={data.fb} onChange={(e) => updateData(e, setData, data)} id='fb' />
            <Input title='Twitter' value={data.twitter} onChange={(e) => updateData(e, setData, data)} id='twitter' />
            <Input title='Linkedin' value={data.linkedin} onChange={(e) => updateData(e, setData, data)} id='linkedin' />
            <Input title='Github' value={data.github} onChange={(e) => updateData(e, setData, data)} id='github' />
        </div>
    )
}

export default PersonalData
