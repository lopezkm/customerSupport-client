import React, { useState, useCallback } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisV, faGrinTongueWink, faMicrophone, faPaperclip, faPaperPlane, faPhoneAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function OpenConversation() {
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="d-flex justify-content-end p-3 align-items-center border-bottom">
        <div className="d-flex justify-content-between">
          <FontAwesomeIcon icon={faStopwatch} className="mr-3"/>
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>
        </div>
        <div className="contact-picture mr-2 rounded"></div>
        <div>Jessica Grill</div>
      </div>
      <div className="py-3 mx-4 border-bottom d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <div className="contact-picture mr-2 rounded"></div>
          <div>
            <div className="small font-weight-bold">Lisa Westfall</div>
            <div className="small-status d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="small-icon mr-1"/>
              <span>Active Now</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisV}/>
      </div>
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-4 pt-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            console.log('mensaaajeeeee', message)
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 ${message.fromMe ? 'chat-color-me text-black' : 'chat-color-sender'}`}>
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <InputGroup.Prepend >
              <InputGroup.Text className="button-click-and-mic">
                <FontAwesomeIcon icon={faGrinTongueWink} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '40px', resize: 'none' }}
              placeholder="Enter your message here..."
            />
            <InputGroup.Append >
              <Button className="button-click-and-mic">
                <FontAwesomeIcon icon={faMicrophone} />
              </Button>
            </InputGroup.Append>
            <InputGroup.Append >
              <Button className="rounded-right button-click-and-mic">
                <FontAwesomeIcon icon={faPaperclip} />
              </Button>
            </InputGroup.Append>
            <Button className="button-send ml-2" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  
  )
}
