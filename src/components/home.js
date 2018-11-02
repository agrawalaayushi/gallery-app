import React, { Component } from 'react';
import { connect } from 'react-redux';

// import logo from './logo.svg';
import logo from '../logo.svg';
// import { simpleAction } from './actions/action';
import { simpleAction } from '../actions/action';
import '../styles/app.scss';

class Home extends Component {

  simpleAction(event){
    this.props.simpleAction();
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(e) => this.simpleAction(e)}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
