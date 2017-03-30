import React from 'react';

var GameStatisticsTab = (props) => {
  return (
    <div>
      game stats tab active
      <div>username: {props.data.username}</div>
      <div>Games Won: {props.data.gamesWon}</div>
      <div>Games Lost: {props.data.gamesLost}</div>
      <div>Games Participated: {props.data.gamesParticipated}</div>
      <div>Currency: {props.data.inGameCurrency} oranges</div>
      <div>Current Win Streak: {props.data.currentWinStreak}</div>
      <div>Current Losing Streak: {props.data.currentLosingStreak}</div>
    </div>
  )
}

export default GameStatisticsTab
