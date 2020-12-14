import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import { Route } from 'react-router-dom';
import MobileBar from './MobileBar';
import ContactConversationsMobile from './ContactConversationsMobile';
import SettingsMobile from './SettingsMobile';
import TeammatesMobile from './TeammatesMobile';
import ChatAreaMobile from './ChatAreaMobile';
import '../Styles/Styles.css';

export default function DashboardMobile({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
        <div className="d-flex flex-column-reverse" style={{minHeight:'100vh'}}>
            <Route path='/'render={() => <MobileBar/>}/>
            <Route exact path='/messages'render={() =><ChatAreaMobile/>} />
            <Route exact path='/conversations'render={() =><ContactConversationsMobile/>} /> 
            <Route exact path='/teammates'render={() =><TeammatesMobile/>} />
            <Route exact path='/settings'render={() =><SettingsMobile/>} />
        </div>
    )
  }