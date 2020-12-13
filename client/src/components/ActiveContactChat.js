import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function ActiveContactChat()  {

    return (
      <div className="py-3 mx-4 border-bottom d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <div className="contact-picture mr-2 rounded"></div>
          <div>
            <div className="small font-weight-bold">Lisa Westfall</div>
            <div className="small-status d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="small-icon mr-1"/>
              <span>Active Now</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisV}/>
      </div>
    )
}
