import React from 'react';
import './App.css';
import HeaderComponent from './components/Header/headerContainer';
import Navbar from './components/Navbar/navbar';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/profileContainer';
import LoginPage from './components/LoginPage/loginPage';
import { initializeApp} from './redux/app_reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/preloader';


class App extends React.Component {

  componentDidMount() {

    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
           
        <div className="app-wrapper">

          <HeaderComponent />
          <Navbar />

          <div className="app-wrapper-content">

            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

            <Route path='/messages' render={() => <DialogsContainer />} />

            <Route path='/users' render={() => <UsersContainer />} />

            <Route path='/login' render={() => <LoginPage />} />

            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />

          </div>

        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
