import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTongueWink, faMicrophone, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useConversations } from '../../contexts/ConversationsProvider';
import '../../Styles/Styles.css';

export default function TypingTextChatArea()  {

    const [text, setText] = useState('')
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
        <Form  className="TypingTextChatArea-container" onSubmit={handleSubmit}>
            <Form.Group className="TypingTextChatArea-form-group">
                <InputGroup>
                    <InputGroup.Prepend >
                        <Button className="TypingTextChatArea-button-clip-and-mic">
                            <FontAwesomeIcon icon={faGrinTongueWink} />
                        </Button>
                    </InputGroup.Prepend>
                    <Form.Control className="TypingTextChatArea-input-enter-message"
                    id="textArea"
                    as="textarea"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                    style={{ height: '40px', resize: 'none' }}
                    placeholder="Enter your message here..."
                    />
                    <InputGroup.Append >
                        <Button className="TypingTextChatArea-button-clip-and-mic">
                            <FontAwesomeIcon icon={faMicrophone} />
                        </Button>
                    </InputGroup.Append>
                    <InputGroup.Append >
                        <Button className="rounded-right TypingTextChatArea-button-clip-and-mic">
                            <FontAwesomeIcon icon={faPaperclip} />
                        </Button>
                    </InputGroup.Append>
                    <Button className="TypingTextChatArea-button-send ml-2" type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

