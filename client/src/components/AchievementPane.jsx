import React from 'react';
import Accumulated1000Oranges from './AchievementComponents/Accumulated1000Oranges.jsx';
import Lost1stGame from './AchievementComponents/Lost1stGame.jsx'
import Played100Games from './AchievementComponents/Played100Games.jsx'
import Lost3InaRow from './AchievementComponents/Lost3InaRow.jsx'
import Played1stGame from './AchievementComponents/Played1stGame.jsx'
import TimeSpentOver24Hrs from './AchievementComponents/TimeSpentOver24Hrs.jsx'
import Won1stGame from './AchievementComponents/Won1stGame.jsx'
import Won3InaRow from './AchievementComponents/Won3InaRow.jsx'

var AchievementPane = (props) => {
  return (
    <div>
      <Accumulated1000Oranges unlocked={props.data.achievements.OrangeKing}/>
      <Lost1stGame unlocked={props.data.achievements.GoodEffort}/>
      <Played100Games unlocked={props.data.achievements.ParticipationAward}/>
      <Lost3InaRow unlocked={props.data.achievements.Lost3InaRow}/>
      <Played1stGame unlocked={props.data.achievements.Played1stGame}/>
      <TimeSpentOver24Hrs unlocked={props.data.achievements.TimeSpentOver24Hrs}/>
      <Won1stGame unlocked={props.data.achievements.Won1stGame}/>
      <Won3InaRow unlocked={props.data.achievements.Won3InaRow}/>
    </div>
  )
}

export default AchievementPane

