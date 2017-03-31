import React from 'react';
import $ from 'jquery';
import Input from './ChatInput.jsx';
import Messages from './ChatMessages.jsx';
import io from 'socket.io-client';
// import 'bootstrap/dist/css/bootstrap.css';

const socket = io();

class ChatWindow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
    this.messageSubmit = this.messageSubmit.bind(this)
    this.messageReceive = this.messageReceive.bind(this)

    socket.on('send:message', message => {this.messageReceive})

  }

  messageReceive(message) {
    var newMessage = this.state.messages
    newMessage.push(message)
    this.setState({messages: newMessage})
    console.log(this.state.messages)
  }

  messageSubmit(message) {
    var newMessage = this.state.messages
    newMessage.push(message)
    this.setState({messages: newMessage})
    console.log(this.state.messages)
    socket.emit('send:message', message)
  }

  render() {
    return(
      <div className="chat" style={{height: '300px'}}>
        <h3>Game Chat</h3>
        <Messages message={this.state.messages}/>
        <Input submit={this.messageSubmit} />
      </div>
    )
  }

}

export default ChatWindow;
