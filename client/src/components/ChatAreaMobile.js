import React from 'react';
import ActiveContactChat from './ActiveContactChat';
import ReadingChatArea from './ReadingChatArea';
import TypingTextChatArea from './TypingTextChatArea';
import '../Styles/Styles.css';

export default function ChatAreaMobile() {
  
    return (
        <div>
            <ActiveContactChat/>     
            <ReadingChatArea/>
            <TypingTextChatArea/>  
        </div>
    )
  }