'use strict';
import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';
import GameDescription from './GameDescription.jsx';
import LoginParent from './LoginParent.jsx';
import { Col, PageHeader, NavBar} from 'react-bootstrap';

// props.game === game instance object

const Home = (props) => (
  <Col id="home">
    <PageHeader id="home-header">Oranges to Oranges</PageHeader>
    <Col>
      <GameDescription />
    </Col>
    <Col sm={4} smOffset={4}>
      <LoginParent sendToLobby={props.route.sendToLobby}/>
    </Col>
  </Col>
)


export default Home;


    // <SignUp sendToLobby={props.route.sendToLobby} />
    // <LogIn sendToLobby={props.route.sendToLobby} />