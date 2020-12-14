import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import ContactConversationsMovile from './ContactConversationsMovile';
import MobileBar from './MobileBar';
import '../Styles/Styles.css';

export default function DashboardMobile({ id }) {
    const { selectedConversation } = useConversations()
  
    return (
        <div>
            <ContactConversationsMovile/>
            <MobileBar/>
        </div>
    )
  }