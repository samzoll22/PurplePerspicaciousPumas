import React from 'react';
import $ from 'jquery';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeHandler(e) {
    this.setState({text: e.target.value})
    console.log(this.state.text)
  }

  handleSubmit(e) {
//preventDefault() prevents the native HTML form from refreshing the page when it is submitted
    e.preventDefault();
    var message = {
      text: this.state.text
    }
    if (this.state.text !== '') {
      this.props.submit(message)
    }
    // this.props.messageReceive(message)
    this.setState({text: ''})
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.changeHandler} value={this.state.text} placeholder="type here..." />
          <input type="submit" value="Send!" />
        </form>
      </div>
    )
  }
}

export default Input;
