import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
    const {title, className, onClick, icon} = props
    return (
        <button className={className} onClick={onClick}>{icon && <FontAwesomeIcon className='icon' icon={icon} />} {title}</button>
    )
}

export default Button;
