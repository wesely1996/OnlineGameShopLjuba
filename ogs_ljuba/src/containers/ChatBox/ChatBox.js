import React from 'react';
import './ChatBox.css';
import MessageHolder from './../../components/Holders/MessageHolder';
import ChatScroll from './../../components/Scroll/ChatScroll';

class ChatBox extends React.Component {

    constructor(props){
		super(props);
		this.state = {
            message : '',
            allMessages : [
                {
                    message:"Ovde ide poruka",
                    stat: false, 
                    isUser: true
                },
                {
                    message:"Ovde ide poruka",
                    stat: false, 
                    isUser: true
                },
                {
                    message:"Neke poruke su drugacije od ostalih",
                    stat: false, 
                    isUser: false
                },
                {
                    message:"Ovde ide poruka",
                    stat: false, 
                    isUser: true
                },
                {
                    message:"Neke poruke su drugacije od ostalih",
                    stat: false, 
                    isUser: false
                },
                {
                    message:"Ovde ide poruka",
                    stat: false, 
                    isUser: true
                },
                {
                    message:"U svrhe testiranja neke poruke su unikatne :)",
                    stat: false, 
                    isUser: true
                },
                {
                    message:"Ovde ide poruka",
                    stat: true, 
                    isUser: false
                },
            ],
		}
    }

    loadMessages = () =>{
        fetch('http://localhost:3000/getAllMessages', {
              method: 'get',
              headers: {'Content-type':'application/json'},
              body: JSON.stringify({
                  userId: this.props.userId
              })
          })
          .then(response => response.json())
          .then(Messages => {
              if(Messages){
                  this.setState({allMessages: Messages})
              }
          })
    }

    changeMessage = (event) =>{
        this.setState({message: event.target.value});
    }
    
    SendMessageOnEnter = (event) => {
		if(event.key === 'Enter'){
			this.onMessageSend();
		}
    }
    
    SendMessage = () => {
		this.onMessageSend();
    }

    onMessageSend = () =>{
        fetch('http://localhost:3000/message', {
              method: 'put',
              headers: {'Content-type':'application/json'},
              body: JSON.stringify({
                  userId: this.props.userId,
                  message: this.state.message
              })
          })
          .then(response => response.json())
          .then(stat => {
              if(stat){
                  this.setState({message: '',allMessages: this.state.allMessages.push(this.state.message)})
              }
          })
      }

    render(){

        const {allMessages} = this.state;

        //this.loadMessages();

        return (
            <div className = "b-100 mt0 bg-transparent bn"
            style={{position: 'absolute', bottom: '1.6em ', width:'25%', minWidth:'300px',
                    Height: '26em', maxHeight:'70%',marginBottom:'1em', marginRight:'1em', zIndex: 250}}>
                <div className='white bg-black box'
                style={{display: 'flex', flexDirection:'column', justifyContent:'flex-end', width:'100%'}}>
                    <ChatScroll>
                        <MessageHolder messages={allMessages}/>
                    </ChatScroll>
                    <div className='br4 ma2'>
                        <input 
                        className='f5 pa1 w-70 h-5 ba bg-white center bw1 b--black-20 white hover-bg-white hover-black'
                        type='sendMsg' 
                        placeholder='Enter new message'
                        onChange = {this.changeMessage}
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