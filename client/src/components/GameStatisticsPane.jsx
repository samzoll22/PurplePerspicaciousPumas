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
      <div>Current Streak: {props.data.currentStreak}</div>
      <hr/>
      <div>Longest Winning Streak: {props.data.LongestWinStreak}</div>
      <hr/>
      <div>Longest Losing Streak: {props.data.LongestLosingStreak}</div>
    </div>
  )
}

export default GameStatisticsPane
