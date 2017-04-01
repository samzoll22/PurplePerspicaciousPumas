import React from 'react';
import MessageListItem from './MessageListItem.jsx';

var Messages = function(props) {
  // const allMessages = props.message.map((msg) => {
  //   <MessageListItem msg={msg} />
  // })
  var height = {'height': '200px', 'overflow': 'auto', 'background-color': 'white'}
  console.log(props.message)
  return (
    <div className="all-messages" style={height}>
      {props.message.map((msg, i) => (
        <MessageListItem key={i} msg={msg} />
      )
    )}
  </div>
  )
}

export default Messages;
