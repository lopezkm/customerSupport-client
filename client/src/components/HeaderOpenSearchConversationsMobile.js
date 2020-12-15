import React from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function HeaderOpenSearchConversationsMobile()  {

    return (
        <div className="d-flex flex-column open-search-container">
            <Form>
                <InputGroup>
                    <InputGroup.Prepend >
                        <Link to='/conversations' className="arrow-back-search-container">
                            <FontAwesomeIcon icon={faArrowLeft} className="arrow-back-search-icon" />
                        </Link>
                    </InputGroup.Prepend>
                    <FormControl className="input-search-teammates-mobile text-black" id="searchTeammates" placeholder="Search"/>
                </InputGroup>
            </Form>
        </div>
    )
}