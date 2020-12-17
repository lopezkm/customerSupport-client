import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEllipsisH, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import DropUpMobile from './DropUpMobile';
import '../../Styles/MobileBar_styles.css';

export default function MobileBar() {
  
    return (
        <div>
            <div className="d-flex align-items-center MobileBar-container justify-content-around">
                <Link to="/messages">
                    <FontAwesomeIcon icon={faUser} className="MobileBar-icon"/>
                </Link>
                <Link to="/conversations">
                    <FontAwesomeIcon icon={faCommentDots} className="MobileBar-icon"/>
                </Link>
                <Link to="/teammates">
                    <FontAwesomeIcon icon={faUsers} className="MobileBar-icon"/>
                </Link>
                <Link to="/settings">
                    <FontAwesomeIcon icon={faEllipsisH} className="MobileBar-icon"/>
                </Link>  
            </div>
            <DropUpMobile/>
        </div>
    )
  }