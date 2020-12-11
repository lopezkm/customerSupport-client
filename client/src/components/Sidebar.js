import React, { useState } from 'react';
import { Tab, Nav, Button, Modal, Form, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff, faSearch, faTasks, faUser, faUserFriends, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import '../Styles/Styles.css';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-column sidebar-first-column"> 
        <FontAwesomeIcon icon={faBars} className="navbar-open-menu" />
        <div className="d-flex flex-column sidebar-bottom-icons">
          <FontAwesomeIcon icon={faCog} className="navbar-open-menu" />
          <FontAwesomeIcon icon={faPowerOff} className="navbar-open-menu" />
        </div>
      </div>
      <div className="d-flex flex-column sidebar-second-column">
        <span className="inbox-title">Inbox</span>
        <Form>
          <InputGroup className="mb-2 px-3">
            <InputGroup.Prepend >
              <Button className="button-search">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </Button>
            </InputGroup.Prepend>
            <FormControl className="input-search text-white" id="inlineFormInputGroup" placeholder="Search"/>
          </InputGroup>
        </Form>
        <span className="conversation-and-teammates-title pt-4 pb-2">Conversation</span>
        <div className="mx-3 p-1 rounded div-under-convesation-and-teammates">
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
        <div className="d-flex justify-content-between align-items-end pt-4 pb-2">
          <span className="conversation-and-teammates-title">Teammates</span>
          <Form.Switch className="pr-3"
              type="switch"
              id="switch-teammates"
              label=""
            />
        </div>
        <div className="mx-3 mb-3 p-1 rounded div-under-convesation-and-teammates overflow-auto">
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-1 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
          <div className="px-2 pt-2 pb-2 d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-end">
              <div className="contact-picture-teammates rounded"></div>
              <div className="ml-2 small text-white">Cole Rise</div>
            </div>
            <span className="span-teammates">2m ago</span>
          </div>
        </div>
      </div>
      <div style={{ width: '16.5rem', height: '97vh' }} className="d-flex flex-column border-right">
        <div className="d-flex justify-content-between p-3 align-items-center border-bottom">
          <span className="span-you pt-1 pl-2">You</span>
          <Form.Switch
            type="switch"
            id="switch-you"
            label=""
          />
        </div>
        {/* 
          <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-right small">
            Your Id: <span className="text-muted">{id}</span>
          </div>*/}
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <div className="d-flex justify-content-between align-items-center pl-3 pr-1 pb-2 mt-2">
            <span className="span-message font-weight-bold ml-2">Messages</span>
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey={CONVERSATIONS_KEY}  onClick={() => setModalOpen(true)} className="rounded button-edit pl-5">
                  <FontAwesomeIcon icon={faEdit} className="span-message-icon"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setModalOpen(true)} className="button-add-contact pt-2 pl-0">
                  <FontAwesomeIcon icon={faPlusCircle} className="add-contact-icon"/>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Tab.Container>
        <Form>
          <InputGroup className="pb-3 mt-1 px-4 border-bottom">
            <InputGroup.Prepend >
              <Button className="button-search-message">
                <FontAwesomeIcon icon={faSearch} className="search-icon-message" />
              </Button>
            </InputGroup.Prepend>
            <FormControl className="input-search-message text-black" id="inlineFormInputGroupMessage" placeholder="Search"/>
          </InputGroup>
        </Form>
        <div className="overflow-auto">
          <Tab.Container activeKey={CONVERSATIONS_KEY}>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
              <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                <Conversations />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Modal show={modalOpen} onHide={closeModal}>
          {conversationsOpen ?
            <NewConversationModal closeModal={closeModal} /> :
            <NewContactModal closeModal={closeModal} />
          }
        </Modal>
      </div>
    </div>
  )
}
