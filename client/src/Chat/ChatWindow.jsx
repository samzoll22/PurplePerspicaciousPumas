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
      messages: [],
      text: ''
    }
    this.messageSubmit = this.messageSubmit.bind(this)
    this.messageReceive = this.messageReceive.bind(this)

    socket.on('send:message', this.messageReceive)

  }

  messageReceive(message) {
    this.state.message.push(message)
  }

  messageSubmit(message) {
    this.state.message.push(message)
    socket.emit('send:message', message)
  }

  render() {
    return(
      <div className="chat">
        <h3>Game Chat</h3>
        <Messages message={this.state.messages}/>
        <Input submit={this.messageSubmit}/>
      </div>
    )
  }

}

export default ChatWindow;
