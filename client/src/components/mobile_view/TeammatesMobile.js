import React from 'react';
import HeaderFucntionalSearchTeammatesMobile from './HeaderFucntionalSearchTeammatesMobile';
import TeammatesTitleSecondColumn from '../desktop_view/TeammatesTitleSecondColumn';
import TeammatesSecondColumn from '../desktop_view/TeammatesSecondColumn';
import '../../Styles/Styles.css';

export default function SettingsMobile()  {

    return (
        <div>
            <HeaderFucntionalSearchTeammatesMobile/>
            <TeammatesTitleSecondColumn/>
            <TeammatesSecondColumn/>
        </div>
    )
}