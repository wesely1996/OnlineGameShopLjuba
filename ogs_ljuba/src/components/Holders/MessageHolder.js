import React from 'react';
import Message from '../Message/Message';

const MessageHolder = ({messages}) => {

	return (
        <div 
        style={{display: 'flex', flexDirection: 'column'}}>
			{
				messages.map((message, id) => {
					return (
						<Message message = {message[0]} />
					);
				})
			}
		</div>
	);
}

export default MessageHolder;