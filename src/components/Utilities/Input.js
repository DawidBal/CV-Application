import React from 'react'

function Input(props) {
    const {title, id, name, type, onChange, value, placeholder} = props

    return (
        <div className="inputField l-flexColumn">
            <label htmlFor={`${id ? id : ''}${name ? name : ''}`}>{title}: </label>
            <input className="input" id={`${id ? id : ''}${name ? name : ''}`} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder || title} />
        </div>
    )
}

export default Input
