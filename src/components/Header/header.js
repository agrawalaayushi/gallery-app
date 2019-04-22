import React, { Component }  from 'react'
import { connect } from 'react-redux';
import  '../../styles/app.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  // Handle logout
  logout(){
    this.props.submitLogoutCallback();
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <header className="header-view">
        <h1 className="header-title">Gallery App</h1>
        {isUserLoggedIn && <span className="logout-btn" onClick={this.logout}>Logout</span>}
      </header>
    );
  }
}
export default connect(null)(Header);