import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Styles.css';

export default function SidebarFirstColumn()  {

    return (
      <div className="d-flex flex-column sidebar-first-column"> 
        <FontAwesomeIcon icon={faBars} className="navbar-open-menu" />
        <div className="d-flex sidebar-bottom-icons">
          <div className="setting-container-elements">
            <FontAwesomeIcon icon={faCog} className="setting-menu" />
            <span className="setting-title-mobile">Settings</span>
          </div>
          <div className="setting-container-elements">
            <FontAwesomeIcon icon={faPowerOff} className="power-menu" />
            <span className="power-title-mobile">Power on/off</span>
          </div>
        </div>
      </div>
    )
}