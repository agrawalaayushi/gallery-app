import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. 
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //-----------------------------------
  // Methods
  //-----------------------------------

  handleEmailChange(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {
      isUserNameSubmitted: true,
      username: this.state.username,
      password: this.state.password
    }
    this.props.submitUserNameCallback(params);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-container">
        <div className="username-wrapper">
          <div>
            <label className="label">Email</label>
            <input
              placeholder="Enter your email id..."
              type="email"
              onChange={this.handleEmailChange}
              className="username"
              required />
          </div>
          <div>
          <label className="label">Password</label>
            <input
              placeholder="Enter a password..."
              type="password"
              onChange={this.handlePasswordChange}
              className="username"
              required />
          </div>
          <div className="btn-wrapper"> 
            <input type="submit" value="Submit" className="submit-btn"/>
          </div>
        </div>
      </form>
    );
  }
}


export default connect(null)(Login);
