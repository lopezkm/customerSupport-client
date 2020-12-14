import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function ActiveContactChat()  {

    return (
      <div className="active-contact-chat-container d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <div className="contact-picture"></div>
          <FontAwesomeIcon icon={faArrowLeft} className="active-chat-arrow-icon"/>
          <div>
            <div className="contact-name-chat">Lisa Westfall</div>
            <div className="small-status d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="small-icon"/>
              <span>Active Now</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} className="vertical-dots-icon"/>
      </div>
    )
}
