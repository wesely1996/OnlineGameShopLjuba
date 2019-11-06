import React from 'react';
import './ChatBox.css';

class ChatBox extends React.Component {

    constructor(props){
		super(props);
		this.state = {
            message : '',
            allMessages : {},
		}
    }
    
    SendMessageOnEnter = (event) => {
		if(event.key === 'Enter'){
			console.log("new message");
		}
    }
    
    SendMessage = (event) => {
		if(event.key === 'Enter'){
			console.log("new message");
		}
    }

    render(){
        return (
            <div className = "b-100 mt0 bg-transparent bn"
            style={{position: 'absolute', bottom: '1.6em ', width:'25%', minWidth:'300px',
                    minHeight: '',marginBottom:'1em', marginRight:'1em', zIndex: 250}}>
                <div className='white bg-black box'
                style={{display: 'flex', flexDirection:'column', justifyContent:'flex-end', width:'100%'}}>
                    <div className='messageContainer'>Messages</div>
                    <div className='br4 ma2'>
                        <input 
                        className='f5 pa1 w-70 h-5 ba bg-white center bw1 b--black-20 white hover-bg-white hover-black'
                        type='sendMsg' 
                        placeholder='Enter new message'
                        onKeyPress = {this.SendMessageOnEnter}/>
                        <button className='w-20'
                        onClick={this.SendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
	
}

export default ChatBox;