import React from 'react';
import MessageListItem from './MessageListItem.jsx';


var Messages = function(props) {
  const allMessages = props.message.map( (msg,i) => {
    <MessageListItem key={i} msg={msg} />
  })

  console.log("this is my props", props);
  return (
    <div className="all-messages">
      {allMessages}
    </div>
  )
}

export default Messages;
