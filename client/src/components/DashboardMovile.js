import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import ContactConversationsMovile from './ContactConversationsMovile';
import { Route } from 'react-router-dom';
import MobileBar from './MobileBar';
import '../Styles/Styles.css';

export default function DashboardMobile({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
        <div className="d-flex flex-column-reverse">
            <Route path='/'render={() => <MobileBar/>}/>
            <Route exact path='/conversation'render={() =><ContactConversationsMovile/>} /> 
        </div>
    )
  }