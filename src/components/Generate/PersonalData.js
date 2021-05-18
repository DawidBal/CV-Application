import React from 'react'
import Input from '../Utilities/Input'
import TextArea from '../Utilities/TextArea';

const PersonalData = (props) => {

    const { setData, data, updateData } = props

    Input.defaultProps = {
        type: 'text'
    };

    return (
        <div className="personal-data l-flexColumn l-gap-05">
            <h3 className="section-title">Personal Data</h3>
            <div className="form">
            <div className="field-wrapper l-flex l-gap-05">
                <Input title='First Name' value={data.firstName} onChange={(e) => updateData(e, setData, data)} name='firstName' id='firstName' />
                <Input title='Last Name' value={data.lastName} onChange={(e) => updateData(e, setData, data)} name='lastName' id='lastName' />
            </div>
            <Input title='Role' value={data.role} onChange={(e) => updateData(e, setData, data)} name='role' id='role' />
            <Input title='Address' value={data.address} onChange={(e) => updateData(e, setData, data)} name='address' id='address' />
            <Input type='tel' title='Phone Number' value={data.phone} onChange={(e) => updateData(e, setData, data)} name='phone' id='phone' />
            <Input type='email' title='Email' value={data.email} onChange={(e) => updateData(e, setData, data)} name='email' id='email' placeholder="example@email.com" />
            </div>
            <h3 className="section-title">Socials</h3>
            <div className="form">
            <Input title='Facebook' value={data.fb} onChange={(e) => updateData(e, setData, data)} name='fb' id='fb' />
            <Input title='Twitter' value={data.twitter} onChange={(e) => updateData(e, setData, data)} name='twitter' id='twitter' />
            <Input title='Linkedin' value={data.linkedin} onChange={(e) => updateData(e, setData, data)} name='linkedin' id='linkedin' />
            <Input title='Github' value={data.github} onChange={(e) => updateData(e, setData, data)} name='github' id='github' />
            </div>
            <h3 className="section-title">Skills</h3>
            <div className="form">
            <Input title='Skills' value={data.skills} 
            onChange={(e) => updateData(e, setData, data)} name='skills' id='skills' placeholder={"Write down a list of skills separated by commas "} />
            </div>
            <h3 className="section-title">Summary</h3>
            <div className="form">
            <TextArea title='Summary'
                value={data.summary}
                onChange={(e) => updateData(e, setData, data)}
                name='summary'
                id='summary'
                placeholder="Write down short CV summarize"
            />
            </div>
        </div>
    )
}

export default PersonalData
