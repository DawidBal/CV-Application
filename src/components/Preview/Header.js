import React from 'react'

const Header = ({data}) => {
    const {firstName, lastName, role} = data
    return (
        <header className="header">
            <h2 className="header__name">{firstName} {lastName}</h2>
            <p className="header__role">{role}</p>
        </header>
    )
}

export default Header
