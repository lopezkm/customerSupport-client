import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function HeaderFucntionalSearchTeammatesMobile()  {

    return (
        <div className="d-flex flex-column inbox-title-container">
            <div className="d-flex flex-row justify-content-between align-items-end">
                <div className="d-flex align-items-end">
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
                    <span className="inbox-title">Inbox</span>
                </div>
                <Link to='/searchTeammates'>
                    <FontAwesomeIcon icon={faSearch} className="search-icon-mobile" />
                </Link>
            </div>
            <Form className="form-search-snd-column">
            <InputGroup className="mb-2 px-3">
                <InputGroup.Prepend >
                <Button className="button-search">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </Button>
                </InputGroup.Prepend>
                <FormControl className="input-search text-white" id="inlineFormInputGroup" placeholder="Search"/>
            </InputGroup>
            </Form>
        </div>
    )
}
