import React from 'react'

const TextArea = (props) => {
    const { title, id, name, onChange, value, placeholder } = props
    return (
        <div className="inputField l-flexColumn">
            <label htmlFor={`${id ? id : ''}${name ? name : ''}`}>{title}: </label>
            <textarea className="input textarea" id={`${id ? id : ''}${name ? name : ''}`} name={name} value={value} onChange={onChange} placeholder={placeholder} cols="10" rows="3" maxLength="600"></textarea>
        </div>
    )
}

export default TextArea
