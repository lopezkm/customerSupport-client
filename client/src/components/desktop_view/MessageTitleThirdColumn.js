import React, { useState } from 'react';
import NewContactModal from '../NewContactModal';
import NewConversationModal from '../NewConversationModal';
import { Tab, Nav, Button, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import '../../Styles/Styles.css';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function MessageTitleThirdColumn()  {
    
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === CONVERSATIONS_KEY;

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div className="MessageTitleThirdColumn-position-mobile">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <div className="MessageTitleThirdColumn-message-title-mobile d-flex justify-content-between align-items-center pl-3 pr-1 pb-2 pt-2">
                    <span className="MessageTitleThirdColumn-span-message font-weight-bold ml-2">Messages</span>
                    <Nav variant="tabs" className="justify-content-center MessageTitleThirdColumn-nav-message-title">
                        <Nav.Item>
                            <Nav.Link eventKey={CONVERSATIONS_KEY}  onClick={() => setModalOpen(true)} className="button-edit pl-5">
                            <FontAwesomeIcon icon={faEdit} className="MessageTitleThirdColumn-span-message-icon"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setModalOpen(true)} className="button-add-contact pl-0">
                            <FontAwesomeIcon icon={faPlusCircle} className="MessageTitleThirdColumn-add-contact-icon"/>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Tab.Container>
            <Form className="MessageTitleThirdColumn-form-search-trd-column">
                <InputGroup className="pb-3 mt-1 px-4 border-bottom">
                    <InputGroup.Prepend >
                        <Button className="MessageTitleThirdColumn-button-search-message">
                            <FontAwesomeIcon icon={faSearch} className="MessageTitleThirdColumn-search-icon-message" />
                        </Button>
                    </InputGroup.Prepend>
                    <FormControl className="MessageTitleThirdColumn-input-search-message text-black" id="inlineFormInputGroupMessage" placeholder="Search"/>
                </InputGroup>
            </Form>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <NewConversationModal closeModal={closeModal} /> :
                    <NewContactModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    )
}
