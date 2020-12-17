import React from 'react';
import { Form } from 'react-bootstrap';
import '../../Styles/TeammatesTitleSecondColumn_styles.css';

export default function TeammatesTitleSecondColumn()  {

    return (
        <div className="d-flex justify-content-between align-items-end pt-4 TeammatesTitleSecondColumn-container">
            <span className="TeammatesTitleSecondColumn-title">Teammates</span>
            <Form.Switch className="pr-3"
                type="switch"
                id="switch-teammates"
                label=""
            />
        </div>
    )
}


