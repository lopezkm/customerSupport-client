import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css';

export default function SidebarFirstColumn()  {

    return (
      <div className="d-flex flex-column sidebar-first-column"> 
        <FontAwesomeIcon icon={faBars} className="navbar-open-menu" />
        <div className="d-flex flex-column sidebar-bottom-icons">
          <FontAwesomeIcon icon={faCog} className="navbar-open-menu" />
          <FontAwesomeIcon icon={faPowerOff} className="navbar-open-menu" />
        </div>
      </div>
    )
}