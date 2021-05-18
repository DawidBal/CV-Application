import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ data }) => {

    const { skills } = data;
    const skillList = skills.split(',').map(skill => skill.trim());
    
    return (
        <div className="preview__socials l-flexColumn l-gap-05">
            <h2 className="title">Skills</h2>
            <ul className="l-flexColumn l-gap-05">
                {skillList[0] === '' ? null : skillList.map((skill, index) => <li key={index}><FontAwesomeIcon className='icon icon--preview' icon={faCaretRight} />{skill}</li>)}
            </ul>
        </div>
    )
}

export default Skills