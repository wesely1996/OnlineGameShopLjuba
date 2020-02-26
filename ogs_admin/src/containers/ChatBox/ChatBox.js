import React from 'react';
import './ChatBox.css';
import MessageHolder from './../../components/Holders/MessageHolder';
import ChatScroll from './../../components/Scroll/ChatScroll';

class ChatBox extends React.Component {

    constructor(props){
		super(props);
		this.state = {
            message : '',
            allMessages : [],
            newOpen: true,
		}
    }

    loadMessages = () =>{
        fetch('http://localhost:3000/getAllMessages', {
              method: 'post',
              headers: {'Content-type':'application/json'},
              body: JSON.stringify({
                  userId: this.props.userId
              })
          })
          .then(response => response.json())
          .then(Messages => {
              if(Messages){
                  this.setState({message:"" ,allMessages: Messages})
              }
          })
    }

    newOpenFun = () =>{
        if(this.state.newOpen){ 
            this.loadMessages();
            this.setState({newOpen: false})
        }

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
                  this.setState({message: '',allMessages: stat})
              }
          })
      }

      componentDidMount(){       
        this.newOpenFun();
      }

    render(){

        const {allMessages} = this.state;

        return (
            <div className = "b-100 mt0 bg-transparent bn"
            style={{position: 'absolute', bottom: '2% ', width:'25%', minWidth:'300px',
                    Height: '26em', maxHeight:'70%',marginBottom:'2%', marginRight:'2%', zIndex: 250}}>
                <div className='white bg-black box'
                style={{display: 'flex', flexDirection:'column', justifyContent:'flex-end', width:'100%'}}>
                    <ChatScroll>
                        <MessageHolder messages={allMessages}/>
                    </ChatScroll>
                    <div className='br4 ma1'>
                        <input 
                        className='f5 pa1 w-70 h-5 ba bg-white center bw1 b--black-20 white hover-bg-white hover-black'
                        style={{height:'23px'}}
                        type='sendMsg' 
                        placeholder='Enter new message'
                        value={this.state.message}
                        onChange = {this.changeMessage}
                        onKeyPress = {this.SendMessageOnEnter}/>
                        <button className='w-20' style={{height:'35px'}}
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