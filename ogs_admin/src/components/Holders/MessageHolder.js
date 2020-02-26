import React from 'react';
import Message from '../Message/Message';

const MessageHolder = ({messages}) => {

	return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
			{
				messages.map((msg, id) => {
					return (
						<Message 
						key={id} 
						message={msg.message} 
						sender={msg.isUser}/>
					)
				})
			}
		</div>
	);
}

export default MessageHolder;