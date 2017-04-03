'use strict';
import React from 'react';
import { ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const results = (
      <ListGroup id="winner">
        <h4>Results</h4>
        {this.props.responses.map((response) => (
          <ListGroupItem bsStyle={response[1] === this.props.winner ? 'success' : 'danger'}>
            <b>{response[1]}:</b> {response[0]} {response[1] === this.props.winner && <b>(WINNER)</b> }
          </ListGroupItem>
        ))}
          <br />
      </ListGroup>
    )

    return (
      <Col>
        {this.props.secondsToRound && <h4>Next round starts in {this.props.secondsToRound} seconds!</h4>}
        {results}
      </Col>
    )

  }
}

export default Winner