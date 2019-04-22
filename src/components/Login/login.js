import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    // Bind 'this' to event handlers. 
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //-----------------------------------
  // Methods
  //-----------------------------------

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {
      isUserNameSubmitted: true,
      email: this.state.email,
      password: this.state.password
    }
    this.props.submitUserNameCallback(params);
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} >
          <div className="username-wrapper">
            <div className="label-wrp">
              <label className="label">Email</label>
              <input
                placeholder="Enter your email id..."
                type="email"
                onChange={this.handleEmailChange}
                className="username"
                required />
            </div>
            <div>
            <div className="label-wrp">
              <label className="label">Password</label>
                <input
                  placeholder="Enter a password..."
                  type="password"
                  onChange={this.handlePasswordChange}
                  className="username"
                  required />
              </div>
            </div>
            <div className="btn-wrapper"> 
              <input type="submit" value="Submit" className="submit-btn"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(null)(Login);
