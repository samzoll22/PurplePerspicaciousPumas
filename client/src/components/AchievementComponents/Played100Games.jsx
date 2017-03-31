import React from 'react';

var Played100Games = (props) => {
  var srcImg = 'https://static4.comicvine.com/uploads/original/11130/111301402/5471270-sticker-35mm_participationaward.jpg'

  var unlockedstyle = {width:'100',height:'100'}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Participation Award</div>
  	</div>
  )
}

export default Played100Games

