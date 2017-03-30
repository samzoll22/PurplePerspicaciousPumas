'use strict';
import React from 'react';
import { Col, Panel } from 'react-bootstrap';


class GameDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleShowDescription = this.handleShowDescription.bind(this);
  }

  handleShowDescription () {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Col id="GameDescription" sm={6} smOffset={3}>
        <button type="button" className={"btn btn-default"} onClick={this.handleShowDescription}>What Is It?</button>

        <div className={this.state.show ? 'show' : 'hide'}>
          <Panel>
            <b>Oranges to Oranges</b> is a four-player game where players try to come up
            with the funniest responses to thought-provoking questions. Sign up or
            log in below!
          </Panel>
        </div>
        <br />
      </Col>
    )
  }
}


export default GameDescription;

