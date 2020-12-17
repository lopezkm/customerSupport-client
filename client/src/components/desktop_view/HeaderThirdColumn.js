import React from 'react';
import { Form } from 'react-bootstrap';
import '../../Styles/HeaderThirdColumn_styles.css';

export default function HeaderThirdColumn()  {

    return (
        <div className="d-flex justify-content-between p-3 align-items-center border-bottom">
          <span className="HeaderThirdColumn-span-you pt-1 pl-2">You</span>
          <Form.Switch
            type="switch"
            id="switch-you"
            label=""
          />
        </div>
    )
}
