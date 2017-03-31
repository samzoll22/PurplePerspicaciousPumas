import React from 'react';

var Won1stGame = (props) => {
  var srcImg = 'https://s-media-cache-ak0.pinimg.com/736x/ba/5a/53/ba5a538e6e4c629d7ff3561e37197750.jpg'

  var unlockedstyle = {width:'100',height:'100'}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Beginner's Luck</div>
  	</div>
  )
}

export default Won1stGame

