import React from 'react'

const Header = ({data}) => {
    const {firstName, lastName, role} = data
    return (
        <header className="header">
            <h2 className="header__name">{firstName}</h2>
            <p className="header__name thin">{lastName}</p>
            <p className="header__role thin">{role}</p>
        </header>
    )
}

export default Header
