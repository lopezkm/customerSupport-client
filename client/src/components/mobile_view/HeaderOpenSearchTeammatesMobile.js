import React from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/HeaderOpenSearchConversationsMobile_styles.css';

export default function HeaderOpenSearchTeammatesMobile()  {

    return (
        <div className="d-flex flex-column HeaderOpenSearchConversationsMobile-container">
            <Form>
                <InputGroup>
                    <InputGroup.Prepend >
                        <Link to='/teammates' className="HeaderOpenSearchConversationsMobile-arrow-back">
                            <FontAwesomeIcon icon={faArrowLeft} className="HeaderOpenSearchConversationsMobile-arrow-back-icon" />
                        </Link>
                    </InputGroup.Prepend>
                    <FormControl className="HeaderOpenSearchConversationsMobile-input-search-teammates text-black" id="searchTeammates" placeholder="Search"/>
                </InputGroup>
            </Form>
        </div>
    )
}