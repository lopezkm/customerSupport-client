import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import '../Styles/Conversations_styles.css';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <div className= "px-3 py-2 border-bottom"
        key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}>
            <div className="pr-2 pb-1 d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <div className="Conversations-contact-picture-messages rounded mt-2 ml-2"></div>
                <div className="d-flex flex-column align-items-start mt-0">
                  <div className="ml-2 text-black">
                    {conversation.recipients.map(r => r.name).join(', ')}
                  </div>
                  <span className="ml-2 Conversations-span-messages-text">
                    Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                  </span>
                </div>
              </div>
              <span className="Conversations-span-messages  pt-1">5m ago</span>
            </div>
          </div>
      ))}
    </ListGroup>
  )
}
