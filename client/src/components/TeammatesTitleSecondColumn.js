import React from 'react';
import { Form } from 'react-bootstrap';
import '../Styles/Styles.css';

export default function TeammatesTitleSecondColumn()  {

    return (
        <div className="d-flex justify-content-between align-items-end pt-4 teammates-title-container">
            <span className="teammates-title">Teammates</span>
            <Form.Switch className="pr-3"
                type="switch"
                id="switch-teammates"
                label=""
            />
        </div>
    )
}


