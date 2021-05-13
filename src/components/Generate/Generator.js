import React from 'react'
import Input from '../Utilities/Input'


const Generator = () => {
    Input.defaultProps = {
        type: 'text'
    };
    return (
        <div className="generator">
            <h2>Insert data to generate CV</h2>
            <Input title='First Name' id='fname'/>
            <Input title='Last Name' id='lname'/>
            <Input title='Role' id='role'/>
            <Input title='Address' id='address'/>
            <Input type='tel' title='Phone Number' id='phone'/>
            <Input type='email' title='Email' id='email'/>
        </div>
    )

   
}

export default Generator
