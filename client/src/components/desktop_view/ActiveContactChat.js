import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Styles.css';

export default function ActiveContactChat()  {

    return (
      <div className="ActiveContactChat-container d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <div className="ActiveContactChat-contact-picture"></div>
          <FontAwesomeIcon icon={faArrowLeft} className="ActiveContactChat-arrow-icon"/>
          <div>
            <div className="ActiveContactChat-contact-name">Lisa Westfall</div>
            <div className="ActiveContactChat-status d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="ActiveContactChat-icon"/>
              <span>Active Now</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} className="ActiveContactChat-vertical-dots-icon"/>
      </div>
    )
}
