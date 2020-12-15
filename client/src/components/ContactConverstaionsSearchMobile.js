import React from 'react';
import HeaderOpenSearchConversationsMobile from './HeaderOpenSearchConversationsMobile';
import MessageTitleThirdColumn from './MessageTitleThirdColumn';
import ConversationListThirdColumn from './ConversationListThirdColumn';
import '../Styles/Styles.css';

export default function ContactConverstaionsSearchMobile()  {

    return (
        <div>
            <HeaderOpenSearchConversationsMobile/>
            <MessageTitleThirdColumn/>
            <ConversationListThirdColumn/>
        </div>
    )
}
