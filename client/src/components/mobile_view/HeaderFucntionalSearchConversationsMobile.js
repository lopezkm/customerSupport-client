import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import '../../Styles/HeaderSecondColumn_styles.css';

export default function HeaderFucntionalSearchConversationsMobile()  {

    return (
        <div className="d-flex flex-column HeaderSecondColumn-inbox-title-container">
            <div className="d-flex flex-row justify-content-between align-items-end">
                <div className="d-flex align-items-end">
                    <FontAwesomeIcon icon={faArrowLeft} className="HeaderSecondColumn-arrow-icon" />
                    <span className="HeaderSecondColumn-inbox-title">Inbox</span>
                </div>
                <Link to='/searchConversations'>
                    <FontAwesomeIcon icon={faSearch} className="HeaderSecondColumn-search-icon-mobile" />
                </Link>
            </div>
            <Form className="HeaderSecondColumn-form-search-snd-column">
            <InputGroup className="mb-2 px-3">
                <InputGroup.Prepend >
                <Button className="HeaderSecondColumn-button-search">
                    <FontAwesomeIcon icon={faSearch} className="HeaderSecondColumn-search-icon" />
                </Button>
                </InputGroup.Prepend>
                <FormControl className="HeaderSecondColumn-input-search text-white" id="inlineFormInputGroup" placeholder="Search"/>
            </InputGroup>
            </Form>
        </div>
    )
}

