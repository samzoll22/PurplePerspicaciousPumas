'use strict';
import React from 'react';
import Rules from './Rules.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

class Pregame extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Col id='waiting-room'>
      <PageHeader>{this.props.game.gameName} <small>Waiting Room</small></PageHeader>
        <h3>Number of Players: 4 / 4</h3>
        <br />
        <div>Game starts in {this.props.pregame.seconds} seconds!</div>

        <Col sm={6} smOffset={3}>
          <Rules/>
        </Col>
      </Col>
    )
  }

}


export default Pregame;




