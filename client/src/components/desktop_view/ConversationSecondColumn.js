import React, { useLayoutEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/ConversationSecondColumn_styles.css';

export default function ConversationSecondColumn()  {

    const [size, setSize] = useState([0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className="d-flex flex-column">
            <span className="ConversationSecondColumn-title">Conversation</span>
            <div className="mx-3 p-1 rounded ConversationSecondColumn-container">
                <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                    <div className="ConversationSecondColumn-container-text-dropUp d-flex align-items-center">
                        <FontAwesomeIcon icon={faUser} className="ConversationSecondColumn-icon"/>
                        <div className="ConversationSecondColumn-text-dropUp ml-2 small text-white">You</div>
                    </div>
                    <Form.Check type={size[0] > 769 ? "checkbox" : "radio"} label="" />
                </div>
                <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                    <div className="ConversationSecondColumn-container-text-dropUp d-flex align-items-center">
                        <FontAwesomeIcon icon={faTasks} className="ConversationSecondColumn-icon"/>
                        <div className="ConversationSecondColumn-text-dropUp ml-2 small text-white">Unassigned</div>
                    </div>
                    <Form.Check type={size[0] > 769 ? "checkbox" : "radio"} label="" />
                </div>
                <div className="pl-2 pr-1 py-1 d-flex justify-content-between align-items-center">
                    <div className="ConversationSecondColumn-container-text-dropUp d-flex align-items-center">
                        <FontAwesomeIcon icon={faUserFriends} className="ConversationSecondColumn-icon" />
                        <div className="ConversationSecondColumn-text-dropUp ml-2 small text-white">All</div>
                    </div>
                    <Form.Check type={size[0] > 769 ? "checkbox" : "radio"} label="" />
                </div>
            </div>
        </div>
    )
}
