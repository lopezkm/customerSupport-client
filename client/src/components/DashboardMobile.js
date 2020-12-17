import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import { Route } from 'react-router-dom';
import MobileBar from './mobile_view/MobileBar';
import ContactConversationsMobile from './mobile_view/ContactConversationsMobile';
import ContactConverstaionsSearchMobile from './mobile_view/ContactConverstaionsSearchMobile';
import SettingsMobile from './mobile_view/SettingsMobile';
import TeammatesMobile from './mobile_view/TeammatesMobile';
import TeammatesSearchMobile from './mobile_view/TeammatesSearchMobile';
import ChatAreaMobile from './mobile_view/ChatAreaMobile';
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