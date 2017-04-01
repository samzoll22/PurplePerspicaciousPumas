import React from 'react';

var MessageListItem = function(props) {
  return(
    <div>
      <p className="message-items">{this.props.msg.text}</p>
    </div>
  )
}

export default MessageListItem;
