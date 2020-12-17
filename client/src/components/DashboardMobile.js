import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import { Route } from 'react-router-dom';
import MobileBar from './MobileBar';
import ContactConversationsMobile from './ContactConversationsMobile';
import ContactConverstaionsSearchMobile from './ContactConverstaionsSearchMobile';
import SettingsMobile from './SettingsMobile';
import TeammatesMobile from './TeammatesMobile';
import TeammatesSearchMobile from './TeammatesSearchMobile';
import ChatAreaMobile from './ChatAreaMobile';
import '../Styles/Styles.css';

export default function DashboardMobile({ id }) {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex flex-column">
            <Route path='/'render={() => <MobileBar/>}/>
            <Route exact path='/messages'render={() =><ChatAreaMobile/>}/>
            <Route exact path='/conversations'render={() =><ContactConversationsMobile/>}/> 
            <Route exact path='/searchConversations'render={() =><ContactConverstaionsSearchMobile/>}/>
            <Route exact path='/teammates'render={() =><TeammatesMobile/>}/>
            <Route exact path='/searchTeammates'render={() =><TeammatesSearchMobile/>}/>
            <Route exact path='/settings'render={() =><SettingsMobile/>}/>
        </div>
    )
  }