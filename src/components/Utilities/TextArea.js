import React from 'react'

const TextArea = (props) => {
    const { title, id, onChange, value, placeholder } = props
    return (
        <div className="inputField l-flexColumn">
            <label htmlFor={id}>{title}: </label>
            <textarea className="input textarea" id={id} value={value} onChange={onChange} placeholder={placeholder} cols="30" rows="10"></textarea>
        </div>
    )
}

export default TextArea
