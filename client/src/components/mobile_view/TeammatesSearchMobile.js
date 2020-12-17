import React from 'react';
import HeaderOpenSearchTeammatesMobile from './HeaderOpenSearchTeammatesMobile';
import TeammatesTitleSecondColumn from '../desktop_view/TeammatesTitleSecondColumn';
import TeammatesSecondColumn from '../desktop_view/TeammatesSecondColumn';
import '../../Styles/Styles.css';

export default function SettingsMobile()  {

    return (
        <div style={{minHeight:'50vh'}}>
            <HeaderOpenSearchTeammatesMobile/>
            <TeammatesTitleSecondColumn/>
            <TeammatesSecondColumn/>
        </div>
    )
}