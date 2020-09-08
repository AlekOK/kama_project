import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile_reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { getUser, getStatus, updateStatus } from '../../redux/profile_reducer';
import { withAuthRedirect } from '../../HOC/withauthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
           
            userId = this.props.autorizetUserId;
        }

        this.props.getUser(userId);
        this.props.getStatus(userId);
        
    }

    render() {
        
      
        return (
           
            <div>
                <Profile {...this.props} 
                        profile={this.props.profile} 
                        updateStatus= {this.props.updateStatus}
                        status= {this.props.status}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizetUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getUser, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer); 

