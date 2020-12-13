import React from 'react';
import HeaderOpenConversation from './HeaderOpenConversation';
import ActiveContactChat from './ActiveContactChat';
import ReadingChatArea from './ReadingChatArea';
import TypingTextChatArea from './TypingTextChatArea';
import '../Styles/Styles.css';


export default function OpenConversation() {

  return (
    <div className="d-flex flex-column flex-grow-1">
      <HeaderOpenConversation/>
      <ActiveContactChat/>
      <ReadingChatArea/>
      <TypingTextChatArea/>
    </div>
  )
}
