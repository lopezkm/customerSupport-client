import React, { useState } from 'react';
import Conversations from './Conversations';
import { Tab } from 'react-bootstrap';
import '../Styles/Styles.css';

const CONVERSATIONS_KEY = 'conversations';

export default function ConversationListThirdColumn()  {

    return (
        <div className="overflow-auto rounded">
          <Tab.Container activeKey={CONVERSATIONS_KEY}>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
              <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                <Conversations />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
    )
}