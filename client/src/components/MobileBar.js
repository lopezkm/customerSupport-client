import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEllipsisH, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function MobileBar() {
  
    return (
        <div className="d-flex align-items-center movile-navbar justify-content-around">
            <Link to="/#" style={{textDecoration: 'none', color: 'white'}}>
                <FontAwesomeIcon icon={faUser} className="movile-navbar-icon" />
            </Link>
            <Link to="/conversation" style={{}}>
                <FontAwesomeIcon icon={faCommentDots} className="movile-navbar-icon" />
            </Link>
            <Link to="/#" style={{textDecoration: 'none', color: 'white'}}>
                <FontAwesomeIcon icon={faUsers} className="movile-navbar-icon" />
            </Link>
            <Link to="/settings" style={{textDecoration: 'none', color: 'white'}}>
                <FontAwesomeIcon icon={faEllipsisH} className="movile-navbar-icon" />
            </Link>            
        </div>
    )
  }