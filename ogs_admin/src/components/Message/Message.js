import React from 'react';
import './Message.css';

const Message = ({message, sender}) =>{
    return (
        <div className='w-100' style={{display:'flex'}}>
            {
                sender ?
                <div className='w-80 black ma1 message br--right b--white-80 bw2'>
                    {message} 
                </div>
                :
                <div className='w-80 black message br--left b--white-80 bw2 admin'>
                    {message}
                </div>
            }
        </div>
    );
}

export default Message;