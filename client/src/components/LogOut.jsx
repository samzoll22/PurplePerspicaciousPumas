import React from 'react';
import $ from 'jquery';

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
      <button id="log-out" onClick={this.destroySession}>Log Out</button>
    )
  }
}

export default LogOut;
