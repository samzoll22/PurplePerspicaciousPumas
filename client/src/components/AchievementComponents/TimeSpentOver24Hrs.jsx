import React from 'react';

var TimeSpentOver24Hrs = (props) => {
  var srcImg = 'http://techpolish.com/img/badges/noob_badge_1.png'

  // var unlockedstyle = {width:'100',height:'100'}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Popped My Cherry</div>
  	</div>
  )
}

export default TimeSpentOver24Hrs

