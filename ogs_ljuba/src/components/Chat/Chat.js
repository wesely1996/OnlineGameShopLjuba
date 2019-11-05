import React from 'react';

const Chat = () =>{
	return (
        <button className = "b-100 mt0 bg-transparent bn grow" 
        style={{position: 'absolute', bottom: '0.3em', right:'1em', maxWidth: '5.5%',
                marginBottom:'1em', marginRight:'1em', zIndex: 500}}>
            <img 
            alt='Chat' 
            src="/images/chat.png" 
            style={{width: '5%', minWidth: '50px', minHeight: '50px'}}/>
		</button>
	);
}

export default Chat;