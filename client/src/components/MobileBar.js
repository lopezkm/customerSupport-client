import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';
import '../Styles/Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEllipsisH, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';


export default function MobileBar({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
        <div className="d-flex align-items-center movile-navbar justify-content-around">
            <FontAwesomeIcon icon={faUser} className="movile-navbar-icon" />
            <FontAwesomeIcon icon={faCommentDots} className="movile-navbar-icon" />
            <FontAwesomeIcon icon={faUsers} className="movile-navbar-icon" />
            <FontAwesomeIcon icon={faEllipsisH} className="movile-navbar-icon" />
        </div>
    )
  }