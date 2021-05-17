import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = ({data}) => {
    const {address, phone, email} = data;

    return (
        <div className="preview__contact l-flexColumn l-gap-05">
            <h2 className="title">Contact</h2>
            <p className="text"><FontAwesomeIcon className='icon icon--preview' icon={faMapMarkerAlt} />{address}</p>
            <p className="text"><FontAwesomeIcon className='icon icon--preview' icon={faPhoneAlt} />{phone}</p>
            <p className="text"><FontAwesomeIcon className='icon icon--preview' icon={faEnvelope} />{email}</p>
        </div>
    )
}

export default Contact
