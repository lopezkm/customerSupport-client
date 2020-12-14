import React from 'react';
import HeaderSecondColumn from './HeaderSecondColumn';
import MessageTitleThirdColumn from './MessageTitleThirdColumn';
import ConversationListThirdColumn from './ConversationListThirdColumn';
import '../Styles/Styles.css';

export default function ContactConversationsMovile()  {

    return (
        <div>
            <HeaderSecondColumn/>
            <MessageTitleThirdColumn/>
            <ConversationListThirdColumn/>
        </div>
    )
}
