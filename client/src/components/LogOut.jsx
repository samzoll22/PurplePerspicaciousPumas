import React from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';


class LogOut extends React.Component {
  constructor(props) {
    super(props)
    this.destroySession = this.destroySession.bind(this)
  }

  destroySession() {

    $.ajax({
      method: 'GET',
      url: '/logout',
      success: (data) => {
        console.log('see you next time!')
        this.props.sendToHome()
      },
      error: () => {
        console.log('looks like you\'re stuck with us')
      }
    })

  }


  render() {
    return (
      <Button id="log-out" bsSize="small" onClick={this.destroySession}>Log Out</Button>
    )
  }
}

export default LogOut;
