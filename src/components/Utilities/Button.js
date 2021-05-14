import React from 'react'

const Button = (props) => {
    const {title, className, onClick} = props
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}

export default Button;
