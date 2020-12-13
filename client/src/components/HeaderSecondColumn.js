import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function HeaderSecondColumn()  {

    return (
        <div>
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
        </div>
    )
}