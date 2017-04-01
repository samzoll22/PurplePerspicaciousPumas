import React from 'react';

var MessageListItem = function(props) {

  var style = {
  backgroundColor: '#C4D8E2',
  borderRadius: '5px',
  padding: '5px',
  marginLeft: '100%',
  margin: '4px',
  textAlign: 'right',
  float: 'right',
  clear: 'right'
  }
  return(
    <div style={style}>
      {props.msg.text}
    </div>
  )
}

export default MessageListItem;
