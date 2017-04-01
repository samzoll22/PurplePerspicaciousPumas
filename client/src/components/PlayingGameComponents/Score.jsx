'use strict';
import React from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let players = this.props.game.players;
    let rounds = this.props.game.rounds;
    let scores = {};

    players.forEach(function(player) {
      scores[player] = 0;
    });

    rounds.forEach(function(round) {
      if (round.winner.length > 0) {
        scores[round.winner]++;
      }
    });

    var dynamicStyle = {};
    // if (scores) {
    //   if (scores[username] === 0) {
    //     dynamicStyle = {"background-color":"#e5edf9", "color":"#474747" }
    //   } else if (scores[username] === 1) {
    //     dynamicStyle = {"background-color":"#80c9d6", "color":"#3a5d63"}
    //   } else if (scores[username] === 2) {
    //     dynamicStyle = {"background-color":"#5fccb0", "color":"#466d63" }
    //   } else if (scores[username] > 2) {
    //     dynamicStyle = {"background-color":"#59c653", "color":"#fff" }
    //   }
    // }

    console.log('PLAYER SCORE', scores)
    return (
      <Table striped bordered condensed hover>
        <tbody>
          <tr>
            {Object.keys(scores).map((username) =>
              <td style={dynamicStyle}>
                <p><Glyphicon glyph="glyphicon glyphicon-user" /> {username}</p>
                <h2>{scores[username]}</h2>
              </td>
            )}
          </tr>
        </tbody>
      </Table>
    )

    // return (
    //   <div id="score">
    //   <div><strong>Scores!</strong></div>
    //   {Object.keys(scores).map((username) =>
    //     <div> {username}: {scores[username]} </div>
    //     )}
    //   </div>
    // )
  }
}



export default Score;