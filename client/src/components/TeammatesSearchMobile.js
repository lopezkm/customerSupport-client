import React from 'react';
import HeaderOpenSearchTeammatesMobile from './HeaderOpenSearchTeammatesMobile';
import TeammatesTitleSecondColumn from './TeammatesTitleSecondColumn';
import TeammatesSecondColumn from './TeammatesSecondColumn';
import '../Styles/Styles.css';

export default function SettingsMobile()  {

    return (
        <div style={{minHeight:'50vh'}}>
            <HeaderOpenSearchTeammatesMobile/>
            <TeammatesTitleSecondColumn/>
            <TeammatesSecondColumn/>
        </div>
    )
}