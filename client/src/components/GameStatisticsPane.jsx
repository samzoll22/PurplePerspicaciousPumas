import React from 'react';

var GameStatisticsPane = (props) => {
  return (
    <div>
      <hr/>
      <div>username: {props.data.username}</div>
      <hr/>
      <div>Games Won: {props.data.gamesWon}</div>
      <hr/>
      <div>Games Lost: {props.data.gamesLost}</div>
      <hr/>
      <div>Games Participated: {props.data.gamesParticipated}</div>
      <hr/>
      <div>Currency: {props.data.inGameCurrency} oranges</div>
      <hr/>
      <div>Current Win Streak: {props.data.currentWinStreak}</div>
      <hr/>
      <div>Current Losing Streak: {props.data.currentLosingStreak}</div>
      <hr/>
    </div>
  )
}

export default GameStatisticsPane
