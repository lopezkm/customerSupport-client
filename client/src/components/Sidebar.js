import React from 'react';
import SidebarFirstColumn from './SidebarFirstColumn';
import HeaderSecondColumn from './HeaderSecondColumn';
import ConversationSecondColumn from './ConversationSecondColumn';
import TeammatesTitleSecondColumn from './TeammatesTitleSecondColumn';
import TeammatesSecondColumn from './TeammatesSecondColumn';
import HeaderThirdColumn from './HeaderThirdColumn';
import MessageTitleThirdColumn from './MessageTitleThirdColumn';
import ConversationListThirdColumn from './ConversationListThirdColumn';
import '../Styles/Styles.css';


export default function Sidebar({ id }) { 

  return (
    <div className="d-flex flex-row">
      <SidebarFirstColumn/>
      <div className="d-flex flex-column sidebar-second-column">
        <HeaderSecondColumn/>
        <ConversationSecondColumn/>
        <TeammatesTitleSecondColumn/>
        <TeammatesSecondColumn/>
      </div>
      <div style={{ width: '16.5rem', height: '97vh' }} className="d-flex flex-column border-right">
        <HeaderThirdColumn/>
        <MessageTitleThirdColumn/>
        <ConversationListThirdColumn/>
      </div>
    </div>
  )
}
