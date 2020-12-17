import React from 'react';
import HeaderOpenConversation from './desktop_view/HeaderOpenConversation';
import ActiveContactChat from './desktop_view/ActiveContactChat';
import ReadingChatArea from './desktop_view/ReadingChatArea';
import TypingTextChatArea from './desktop_view/TypingTextChatArea';
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
