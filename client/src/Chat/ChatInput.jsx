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
  }

  handleSubmit(e) {
    e.preventDefault();
    var message = {
      text: this.state.text
    }
    this.props.submit(message)
    this.setState({text: ''})
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.changeHandler} value={this.state.text}></input>
        </form>
      </div>
    )
  }
}

export default Input;
