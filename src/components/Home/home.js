import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { Header } from '../Header/header';
import Login  from '../Login/login';
import { Loader } from '../common/loader-view/loader-view';
import ImageList from '../Gallery/image-list';
import '../../styles/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      isLoader: false,
      isUsernameSubmitted: true
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  submitLoginCredential(user) {
    this.setState({
      isLoader: true
    })
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
      this.setState({
        currentUsername: user.email,
        password: user.password,
        isUsernameSubmitted: true,
        isLoader: false
      })
  }

  getLoaderView() {
    return <Loader/>
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  render() {
    const { isLoader, isUsernameSubmitted } = this.state;

    return (
      <div className="gallery-home-view">
        <Header />
        {isLoader && this.getLoaderView()}
        {!isUsernameSubmitted ?
          <Login
          submitUserNameCallback = {(loginDetails) => this.submitLoginCredential(loginDetails)}/>
          :
          <ImageList {...this.props} />
        }
      </div>
    );
  }
}


export default connect(null, null)(Home);
