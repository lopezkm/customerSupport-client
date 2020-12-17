import React, { useCallback } from 'react';
import { useConversations } from '../../contexts/ConversationsProvider';
import '../../Styles/Styles.css';

export default function ReadingChatArea()  {

    const setRef = useCallback(node => {
        if (node) {
        node.scrollIntoView({ smooth: true })
        }
    }, [])

    const { sendMessage, selectedConversation } = useConversations();

    return (
        <div className="flex-grow-1 overflow-auto my-1 reading-chat-area-height-mobile" >
            <div className="d-flex flex-column align-items-start justify-content-end px-4 pt-3">
                {selectedConversation.messages.map((message, index) => {
                    const lastMessage = selectedConversation.messages.length - 1 === index;
                    return (
                    <div
                        ref={lastMessage ? setRef : null}
                        key={index}
                        className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
                    >
                        <div
                        className={`rounded px-2 py-1 ${message.fromMe ? 'chat-color-me text-white' : 'chat-color-sender'}`}>
                        {message.text}
                        </div>
                        <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                        {message.fromMe ? 'You' : message.senderName}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
