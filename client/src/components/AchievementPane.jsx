import React from 'react';
import Accumulated1000Oranges from './AchievementComponents/Accumulated1000Oranges.jsx';
import Lost1stGame from './AchievementComponents/Lost1stGame.jsx'

var AchievementPane = (props) => {
  return (
    <div>
      <Accumulated1000Oranges unlocked={props.data.achievements[0].OrangeKing}/>
      <Lost1stGame unlocked={props.data.achievements[1].GoodEffort}/>
    </div>
  )
}

export default AchievementPane

