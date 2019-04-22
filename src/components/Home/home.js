import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { Loader } from '../common/loader-view/loader-view';
import  Header from '../Header/header';
import Login  from '../Login/login';
import ImageList from '../Gallery/image-list';
import '../../styles/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      isLoader: false,
      isUserLoggedIn: false,
    }
    this.logout = this.logout.bind(this);

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
        isUserLoggedIn: true,
        isLoader: false
      })
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.setState({
      currentUsername: '',
      password:'',
      isUserLoggedIn: false,
      isLoader: false
    })
  }

  getLoaderView() {
    return <Loader/>
  }
 
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentDidMount() {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    if (email && password) {
      this.setState({
        currentUsername: email,
        password: password,
        isUserLoggedIn: true,
        isLoader: false
      })
    }
  }


  render() {
    const { isLoader, isUserLoggedIn } = this.state;
    return (
      <div className="gallery-home-view">
        <Header submitLogoutCallback = {() => this.logout()}  isUserLoggedIn={isUserLoggedIn}/>
        {isLoader && this.getLoaderView()}
        {!isUserLoggedIn ?
          <Login
          submitUserNameCallback = {(loginDetails) => this.submitLoginCredential(loginDetails)}/>
          :
          <ImageList />
        }
      </div>
    );
  }
}


export default connect(null, null)(Home);
