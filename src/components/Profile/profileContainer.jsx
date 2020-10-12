import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile_reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { getUser, getStatus, updateStatus, savePhoto } from '../../redux/profile_reducer';
import { withAuthRedirect } from '../../HOC/withauthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
           
            userId = this.props.autorizetUserId;
        }

        this.props.getUser(userId);
        this.props.getStatus(userId);
        
    }

    componentDidMount() {

        this.refreshProfile();
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId)    {
            this.refreshProfile();
        }
    }

    render() {
        
      return (
           
            <div>
                <Profile {...this.props} 
                        isOwner= { !this.props.match.params.userId }
                        profile={this.props.profile} 
                        updateStatus= {this.props.updateStatus}
                        status= {this.props.status}
                        savePhoto= {this.props.savePhoto}/>
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizetUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getUser, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect)(ProfileContainer); 

