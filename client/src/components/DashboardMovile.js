import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import { Route } from 'react-router-dom';
import MobileBar from './MobileBar';
import ContactConversationsMovile from './ContactConversationsMovile';
import SettingsMovile from './SettingsMovile';
import '../Styles/Styles.css';

export default function DashboardMobile({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
        <div className="d-flex flex-column-reverse">
            <Route path='/'render={() => <MobileBar/>}/>
            <Route exact path='/conversation'render={() =><ContactConversationsMovile/>} /> 
            <Route exact path='/settings'render={() =><SettingsMovile/>} />
        </div>
    )
  }