import React from 'react'
import Input from '../Utilities/Input'
import TextArea from '../Utilities/TextArea';

const PersonalData = (props) => {

    const { setData, data, updateData } = props

    Input.defaultProps = {
        type: 'text'
    };

    return (
        <div>
            <h3>Personal Data</h3>
            <Input title='First Name' value={data.firstName} onChange={(e) => updateData(e, setData, data)} name='firstName' id='firstName' />
            <Input title='Last Name' value={data.lastName} onChange={(e) => updateData(e, setData, data)} name='lastName' id='lastName' />
            <Input title='Role' value={data.role} onChange={(e) => updateData(e, setData, data)} name='role' id='role' />
            <Input title='Address' value={data.address} onChange={(e) => updateData(e, setData, data)} name='address' id='address' />
            <Input type='tel' title='Phone Number' value={data.phone} onChange={(e) => updateData(e, setData, data)} name='phone' id='phone' />
            <Input type='email' title='Email' value={data.email} onChange={(e) => updateData(e, setData, data)} name='email' id='email' placeholder="example@email.com" />
            <h3>Socials</h3>
            <Input title='Facebook' value={data.fb} onChange={(e) => updateData(e, setData, data)} name='fb' id='fb' />
            <Input title='Twitter' value={data.twitter} onChange={(e) => updateData(e, setData, data)} name='twitter' id='twitter' />
            <Input title='Linkedin' value={data.linkedin} onChange={(e) => updateData(e, setData, data)} name='linkedin' id='linkedin' />
            <Input title='Github' value={data.github} onChange={(e) => updateData(e, setData, data)} name='github' id='github' />
            <h3>Summary</h3>
            <TextArea title='Summary'
                value={data.summary}
                onChange={(e) => updateData(e, setData, data)}
                name='summary'
                id='summary'
                placeholder="Write down short CV summarize"
            />
        </div>
    )
}

export default PersonalData
