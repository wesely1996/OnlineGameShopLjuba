import React from 'react';

const Message = ({message, sender}) =>{
    return (
        <div className='w-80 bg-lightgray black'
        style={{minHeight:'50px'}}>
            {message}
        </div>
    );
}

export default Message;