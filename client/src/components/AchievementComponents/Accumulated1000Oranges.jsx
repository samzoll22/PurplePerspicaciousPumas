import React from 'react';

var Accumulated1000Oranges = (props) => {
  var srcImg = 'http://www.clipartden.com/_thumbspd/food/fruit/Orange_Icon_4545.png'

  var unlockedstyle = {width:'100',height:'100'}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Orange King</div>
  	</div>
  )
}

export default Accumulated1000Oranges
