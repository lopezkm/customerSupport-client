import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Styles.css';

export default function HeaderOpenConversation()  {

    return (
        <div className="d-flex justify-content-end p-3 align-items-center border-bottom">
            <div className="d-flex justify-content-between">
            <FontAwesomeIcon icon={faStopwatch} className="mr-3"/>
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>
            </div>
            <div className="contact-picture mr-2 rounded"></div>
            <div>Jessica Grill</div>
        </div>
    )
}
