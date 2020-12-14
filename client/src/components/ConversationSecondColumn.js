import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function ConversationSecondColumn()  {

    return (
        <div className="d-flex flex-column">
            <span className="conversation-title">Conversation</span>
            <div className="mx-3 p-1 rounded div-under-convesation">
            <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} className="conversation-icon"/>
                <div className="ml-2 small text-white">You</div>
                </div>
                <Form.Check type="checkbox" label="" />
            </div>
            <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faTasks} className="conversation-icon"/>
                <div className="ml-2 small text-white">Unassigned</div>
                </div>
                <Form.Check type="checkbox" label="" />
            </div>
            <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUserFriends} className="conversation-icon" />
                <div className="ml-2 small text-white">All</div>
                </div>
                <Form.Check type="checkbox" label="" />
            </div>
            </div>
        </div>
    )
}