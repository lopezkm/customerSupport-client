import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import DashboardMobile from './DashboardMovile';
import '../Styles/Styles.css';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div>
      <div className="desktop-view">
        <div className="d-flex" style={{ height: '100vh' }}>
          <Sidebar id={id} />
          {selectedConversation && <OpenConversation />}
        </div>
      </div>
      <div className="mobile-view">
        <DashboardMobile id={id} />
      </div>
    </div>
  )
}
