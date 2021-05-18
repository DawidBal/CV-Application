import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Socials = ({data}) => {

    const { fb, twitter, linkedin, github } = data;
    return (
        <div className="preview__socials l-flexColumn l-gap-05">
            <h2 className="title">Socials</h2>
            {fb === '' ? null : <p className="text">{<FontAwesomeIcon className='icon icon--preview' icon={faFacebook} />}{fb}</p>}
            {twitter === '' ? null : <p className="text">{<FontAwesomeIcon className='icon icon--preview' icon={faTwitter} />}{twitter} </p>}
            {linkedin === '' ? null : <p className="text">{<FontAwesomeIcon className='icon icon--preview' icon={faLinkedin} />} {linkedin} </p>}
            {github === '' ? null : <p className="text">{<FontAwesomeIcon className='icon icon--preview' icon={faGithub} />}{github} </p>}
        </div>
    )
}

export default Socials