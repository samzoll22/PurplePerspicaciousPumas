import React from 'react';

var Lost1stGame = (props) => {
  var srcImg = 'http://www.random-badge-emporium.com/ekmps/shops/randombadges/images/Game-Over-Button-Badge-Choice-Of-Sizes-Gamer-Computer-Video-Game-Humour-Cool-26806-p.jpg'
  
  var lockedStyle = {opacity: 0.2, width:'50%', height:'50%'}
  var unlockedStyle = {width:'100', height:'100'}

  var unlockedImage = <img style={unlockedStyle}src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Good Effort!</div>
  	</div>
  )
}

export default Lost1stGame

