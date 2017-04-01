'use strict';
import React from 'react';
import Rules from './Rules.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const WaitingRoom = (props) => (
  <Col id='waiting-room'>
  <PageHeader>{props.game.gameName} <small>Waiting Room</small>

    </PageHeader>
    <Button id="log-out" bsSize="small" onClick={props.sendToLobby} >Back To Lobby</Button>
    <h3>Number of Players: {props.game.players.length} / 4</h3>
    <br />

    {props.seconds && <h4>Game starts in {props.seconds} seconds!</h4>}

    <h4>Current Players:</h4>
    <Col sm={4} smOffset={4}>
      <ListGroup>
        {props.game.players.map( (player, key) => <ListGroupItem>{player, key}</ListGroupItem>)}
      </ListGroup>
    </Col>
    <Col sm={6} smOffset={3}>
      <Rules/>
    </Col>
  </Col>
)

export default WaitingRoom;


