import React, { useState } from 'react';
import Conversations from './Conversations';
import { Tab } from 'react-bootstrap';
import '../Styles/Styles.css';

const CONVERSATIONS_KEY = 'conversations';

export default function ConversationListThirdColumn()  {

    return (
        <div className="overflow-auto rounded" style={{height:'72.2vh'}}>
          <Tab.Container activeKey={CONVERSATIONS_KEY}>
            <Tab.Content className="border-right flex-grow-1">
              <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                <Conversations />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
    )
}