import React from 'react';

var Badge = (props) => {

  var unlocked = {width:'100px',height:'100px'}
  var locked = {opacity: 0.2, width:'100px',height:'100px'}

  var unlockedAchievement = <img style={unlocked }src={props.pic}/>
  var lockedAchievement = <img style={locked} src={props.pic}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedAchievement : lockedAchievement}
  	  <div>{props.name}</div>
  	</div>
  )
}

export default Badge
