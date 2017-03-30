import React from 'react';
import MessageListItem from './MessageListItem.jsx';


var Messages = function(props) {
  const allMessages = props.message.map( (msg,i) => {
    <MessageListItem key={i} msg={msg} />
  })

  return (
    <ul className="all-messages">
      {allMessages}
    </ul>
  )
}

export default Messages;
