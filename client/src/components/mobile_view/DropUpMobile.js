import React, { useState, useLayoutEffect } from 'react';
import ConversationSecondColumn from '../desktop_view/ConversationSecondColumn';
import Sheet from 'react-modal-sheet';
import '../../Styles/DropUpMobile_styles.css';
 
export default function DropUpMobile() {

    const [isOpen, setOpen] = useState(false);

    const [size, setSize] = useState([0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
 
  return (
    <div className="DropUpMobile-container">
      <div className="DropUpMobile-open" onClick={() => setOpen(true)}>
        <div className="DropUpMobile-icon"/>
      </div>
      {size[0] < 769 ?
        <Sheet  snapPoints={[300]} isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container className="react-modal-sheet-container">
            <Sheet.Header/>
                <Sheet.Content>
                    <ConversationSecondColumn/>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop/>
        </Sheet> : null}
    </div>
  );
}

