import React from 'react';
import MessageListItem from './MessageListItem.jsx';


var Messages = function(props) {
  const allMessages = props.message.map( (msg,i) => {
    <MessageListItem key={i} msg={msg.text} />
  })

  return (
    <div className="all-messages">
      {allMessages}
    </div>
  )
}

export default Messages;
