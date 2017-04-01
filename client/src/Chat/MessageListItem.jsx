import React from 'react';

var MessageListItem = function(props) {

  var style = {
    backgroundColor: '#C4D8E2',
    borderRadius: '5px',
    padding: '10px',
    margin: '3px 20px',
    textAlign: 'right',
    float: 'right',
    clear: 'right'
  } 

  var pStyle = {
    textDecoration: 'underline'
  }
  return(

    <div className="message" style={style}>
      <p style={pStyle}>{props.msg.username}</p>
      <span>{props.msg.text}</span>
    </div>
  )
}

export default MessageListItem;
