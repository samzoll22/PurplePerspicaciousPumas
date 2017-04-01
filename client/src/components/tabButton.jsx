import React from 'react';

var TabButton = (props) => {
  return (
  	<div onClick={props.handleClick}>
      {props.displayName}
    </div>

  )
}

export default TabButton