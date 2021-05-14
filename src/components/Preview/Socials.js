import React from 'react'

const Socials = ({socialData}) => {

    const { fb, twitter, linkedin, github } = socialData;

    // TODO: Create component text with icon
    // TODO: Change social displaying method
    return (
        <div className="socials">
            <p className="title">Socials</p>
            {fb === '' ? null : <p><span>Icon!</span> {fb} </p>}
            {twitter === '' ? null : <p><span>Icon!</span> {twitter} </p>}
            {github === '' ? null : <p><span>Icon!</span> {github} </p>}
            {linkedin === '' ? null : <p><span>Icon!</span> {linkedin} </p>}
        </div>
    )
}

export default Socials