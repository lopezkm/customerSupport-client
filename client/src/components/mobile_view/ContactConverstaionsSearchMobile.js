import React from 'react';
import HeaderOpenSearchConversationsMobile from './HeaderOpenSearchConversationsMobile';
import MessageTitleThirdColumn from '../desktop_view/MessageTitleThirdColumn';
import ConversationListThirdColumn from '../desktop_view/ConversationListThirdColumn';
import '../../Styles/Styles.css';

export default function ContactConverstaionsSearchMobile()  {

    return (
        <div>
            <HeaderOpenSearchConversationsMobile/>
            <MessageTitleThirdColumn/>
            <ConversationListThirdColumn/>
        </div>
    )
}
