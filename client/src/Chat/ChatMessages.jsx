import React from 'react';
import MessageListItem from './MessageListItem.jsx';

var Messages = function(props) {
  // const allMessages = props.message.map((msg) => {
  //   <MessageListItem msg={msg} />
  // })
  console.log(props.message)
  return (
    <div className="all-messages">
      {props.message.map((msg, i) => (
        <MessageListItem key={i} msg={msg} />
      )
    )}
  </div>
  )
}

export default Messages;
