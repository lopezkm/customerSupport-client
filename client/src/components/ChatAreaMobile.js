import React from 'react';
import ActiveContactChat from './ActiveContactChat';
import ReadingChatArea from './ReadingChatArea';
import TypingTextChatArea from './TypingTextChatArea';
import '../Styles/Styles.css';

export default function ChatAreaMobile() {
  
    return (
        <div className="d-flex flex-column" style={{minHeight:'92.5vh'}}>
            <ActiveContactChat/>     
            <ReadingChatArea/>
            <TypingTextChatArea/>  
        </div>
    )
  }