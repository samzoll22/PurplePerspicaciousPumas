import React from 'react';

var Won3InaRow = (props) => {
  var srcImg = 'https://thumbs.dreamstime.com/z/fresh-tangerines-oranges-badge-vector-illustration-mandarin-tangerine-diet-organic-mandarine-piece-healthy-food-juicy-84948216.jpg'

  var unlockedstyle = {width:'100',height:'100'}
  var lockedStyle = {opacity: 0.2, width:'100',height:'100'}

  var unlockedImage = <img src={srcImg}/>
  var lockedImage = <img style={lockedStyle} src={srcImg}/>
  
  return (
  	<div>
  	  {props.unlocked ? unlockedImage : lockedImage}
  	  <div>Oranges, Oranges, Oranges</div>
  	</div>
  )
}

export default Won3InaRow

