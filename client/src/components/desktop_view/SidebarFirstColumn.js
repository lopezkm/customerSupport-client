import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Styles.css';

export default function SidebarFirstColumn()  {

    return (
      <div className="d-flex flex-column SidebarFirstColumn"> 
        <FontAwesomeIcon icon={faBars} className="SidebarFirstColumn-navbar-open-menu" />
        <div className="d-flex SidebarFirstColumn-bottom-icons">
          <div className="SidebarFirstColumn-setting-container-elements">
            <FontAwesomeIcon icon={faCog} className="SidebarFirstColumn-setting-menu" />
            <span className="SidebarFirstColumn-setting-title-mobile">Settings</span>
          </div>
          <div className="SidebarFirstColumn-setting-container-elements">
            <FontAwesomeIcon icon={faPowerOff} className="SidebarFirstColumn-power-menu" />
            <span className="SidebarFirstColumn-power-title-mobile">Power on/off</span>
          </div>
        </div>
      </div>
    )
}