import React from 'react';
import './ChatBox.css';

const ChatBox = () =>{
	return (
        <div className = "b-100 mt0 bg-transparent bn grow"
        style={{position: 'absolute', bottom: '1.6em ', right:'3em', maxWidth: '5.5%',
                marginBottom:'1em', marginRight:'1em', zIndex: 250}}>
            <div className='white bg-black box'>
                CHAT BOX
            </div>
		</div>
	);
}

export default ChatBox;