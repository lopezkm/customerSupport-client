import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import '../Styles/Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff, faSearch, faTasks, faUser, faUserFriends, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

export default function MobileBar({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
    
        <div>
        hello world
        </div>
       
    )
  }