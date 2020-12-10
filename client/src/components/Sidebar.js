import React, { useState } from 'react'
import { Tab, Nav, Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import '../Styles/Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <span className="inbox-title" >Inbox</span>
        <Form>
          <InputGroup className="mb-2 search-bar">
            <InputGroup.Prepend >
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroup" placeholder="Search"/>
          </InputGroup>
        </Form>
      </div>
      <div style={{ width: '250px' }} className="d-flex flex-column">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-right small">
            Your Id: <span className="text-muted">{id}</span>
          </div>
          <Button onClick={() => setModalOpen(true)} className="rounded-0">
            New {conversationsOpen ? 'Conversation' : 'Contact'}
          </Button>
        </Tab.Container>

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
