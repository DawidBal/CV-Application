import React from 'react'

function Input(props) {
    const {title, id, type} = props

    return (
        <div>
            <label htmlFor={id}>{title}: </label>
            <input type={type} id={id} placeholder={title} />
        </div>
    )
}

export default Input
