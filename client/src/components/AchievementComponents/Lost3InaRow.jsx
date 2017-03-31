
import React from 'react';

var Lost3InaRow = (props) => {
  var srcImg = 'http://vignette2.wikia.nocookie.net/spongebob/images/e/e8/LOSER.jpg/revision/latest?cb=20140911051327'

  var unlockedstyle = {width:100,height:100}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Loser!</div>
  	</div>
  )
}

export default Lost3InaRow
