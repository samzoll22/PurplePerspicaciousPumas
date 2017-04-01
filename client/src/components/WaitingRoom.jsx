'use strict';
import React from 'react';
import Rules from './Rules.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem, Button, Well, ProgressBar, Glyphicon } from 'react-bootstrap';

const WaitingRoom = (props) => (
  <div id='waiting-room'>
    <Col sm={6} smOffset={3}>
        <Col bsClass="container">
          <Col sm={3} ></Col>
          <Col sm={6} ><h1>Waiting Room</h1></Col>
          <Col sm={3} >
          <Button id="log-out" bsSize="large" onClick={props.sendToLobby} ><Glyphicon glyph="glyphicon glyphicon-home" /></Button>
          </Col>
        </Col>
    </Col>
    <br />
    <Col sm={6} smOffset={3}>
    <Well style={{"min-height":"6em", "padding" : "0"}}>
      <Col bsClass="container">
        <Col md={6} >
          <h3><Glyphicon glyph="glyphicon glyphicon-user" />  {props.user}</h3>
        </Col>
        <Col md={6} >
          <h3><Glyphicon glyph="glyphicon glyphicon-play" />  {props.game.gameName}</h3>
        </Col>
      </Col>
    </Well>
    <Well>
      {props.seconds && <h4>Game starts in {props.seconds} seconds!</h4>}

      <h4>ONLINE PLAYERS</h4>
        <Well>
          <h3>{props.game.players.length} / 4</h3>
          <p>PLAYERS CONNECTED</p>
        </Well>
      <ProgressBar>
        <ProgressBar bsStyle="success" now={props.game.players.length * 25}/>
      </ProgressBar>

    </Well>
    </Col>
    <br />

    <Col sm={4} smOffset={4}>
      <ListGroup>
        {props.game.players.map( (player) => <ListGroupItem>{player}</ListGroupItem>)}
      </ListGroup>
    </Col>
    <Col sm={6} smOffset={3}>
      <Rules/>
    </Col>
  </div>
)

export default WaitingRoom;


