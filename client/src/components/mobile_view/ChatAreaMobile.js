import React from 'react';
import ActiveContactChat from '../desktop_view/ActiveContactChat';
import ReadingChatArea from '../desktop_view/ReadingChatArea';
import TypingTextChatArea from '../desktop_view/TypingTextChatArea';
import '../../Styles/Styles.css';

export default function ChatAreaMobile() {
  
    return (
        <div>
            <ActiveContactChat/>     
            <ReadingChatArea/>
            <TypingTextChatArea/>  
        </div>
    )
  }