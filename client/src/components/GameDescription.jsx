'use strict';
import React from 'react';
import { Col, Panel, Modal } from 'react-bootstrap';

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
      <div>
      <button type="button" className={"btn btn-default"} onClick={this.handleShowDescription}>What Is It?</button>

        <Modal show={this.state.show} onHide={this.handleShowDescription} className={"modal-container"} >
          <Modal.Header closeButton>
            <Modal.Title>Oranges to Oranges</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>Oranges to Oranges</b> is a four-player game where players try to come up
              with the funniest responses to thought-provoking questions. Sign up or
              log in below!
            </p>
          </Modal.Body>
          <Modal.Footer>
             <button className={"btn btn-default"} onClick={this.handleShowDescription}>Close</button>
          </Modal.Footer>
       </Modal>
      </div>
    )
  }
}


export default GameDescription;

