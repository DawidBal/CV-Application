import React from 'react'

function Input(props) {
    const {title, id, type, onChange, value, placeholder} = props

    return (
        <div className="inputField l-flexColumn">
            <label htmlFor={id}>{title}: </label>
            <input className="input" type={type} id={id} value={value} onChange={onChange} placeholder={placeholder || title} />
        </div>
    )
}

export default Input
