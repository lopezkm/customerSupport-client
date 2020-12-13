import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import '../Styles/Styles.css';
import MobileBar from './MobileBar';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className="padre">
      <div className="desktop-view">
        <div className="d-flex" style={{ height: '100vh' }}>
          <Sidebar id={id} />
          {selectedConversation && <OpenConversation />}
        </div>
      </div>
      <div className="mobile-view">
        <MobileBar/>
      </div>
    </div>
  )
}
