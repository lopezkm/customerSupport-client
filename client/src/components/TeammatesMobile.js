import React from 'react';
import HeaderSecondColumn from './HeaderSecondColumn';
import TeammatesTitleSecondColumn from './TeammatesTitleSecondColumn';
import TeammatesSecondColumn from './TeammatesSecondColumn';
import '../Styles/Styles.css';

export default function SettingsMobile()  {

    return (
        <div style={{minHeight:'50vh'}}>
            <HeaderSecondColumn/>
            <TeammatesTitleSecondColumn/>
            <TeammatesSecondColumn/>
        </div>
    )
}