import React from 'react';

var MessageListItem = function(props) {
  return(
    <div>
      {props.msg.text}
    </div>
  )
}

export default MessageListItem;
