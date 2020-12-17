import React from 'react';
import SidebarFirstColumn from './desktop_view/SidebarFirstColumn';
import HeaderSecondColumn from './desktop_view/HeaderSecondColumn';
import ConversationSecondColumn from './desktop_view/ConversationSecondColumn';
import TeammatesTitleSecondColumn from './desktop_view/TeammatesTitleSecondColumn';
import TeammatesSecondColumn from './desktop_view/TeammatesSecondColumn';
import HeaderThirdColumn from './desktop_view/HeaderThirdColumn';
import MessageTitleThirdColumn from './desktop_view/MessageTitleThirdColumn';
import ConversationListThirdColumn from './desktop_view/ConversationListThirdColumn';
import '../Styles/Sidebar_styles.css';


export default function Sidebar({ id }) { 

  return (
    <div className="d-flex flex-row">
      <SidebarFirstColumn/>
      <div className="d-flex flex-column Sidebar-second-column">
        <HeaderSecondColumn/>
        <ConversationSecondColumn/>
        <TeammatesTitleSecondColumn/>
        <TeammatesSecondColumn/>
      </div>
      <div style={{ width: '16.5rem', height: '97vh' }} className=" rounded d-flex flex-column border-right">
        <HeaderThirdColumn/>
        <MessageTitleThirdColumn/>
        <ConversationListThirdColumn/>
      </div>
    </div>
  )
}
