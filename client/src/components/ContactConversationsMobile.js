import React from 'react';
import HeaderFucntionalSearchConversationsMobile from './HeaderFucntionalSearchConversationsMobile';
import MessageTitleThirdColumn from './MessageTitleThirdColumn';
import ConversationListThirdColumn from './ConversationListThirdColumn';
import '../Styles/Styles.css';

export default function ContactConversationsMobile()  {

    return (
        <div>
            <HeaderFucntionalSearchConversationsMobile/>
            <MessageTitleThirdColumn/>
            <ConversationListThirdColumn/>
        </div>
    )
}
