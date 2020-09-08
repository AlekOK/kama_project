import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import {  logOut } from '../../redux/auth_reducer';

class HeaderComponent extends React.Component {
    render() {
      
        return <Header {...this.props}/>
    }    
  
};

    let mapStateToProps = (state) => {
       
        return {
               login:  state.auth.login,
               id: state.auth.id,
               isAuth: state.auth.isAuth,
               email: state.auth.email
        }
    }    

export default connect(mapStateToProps, { logOut})(HeaderComponent);



