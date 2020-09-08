import React from 'react';
import { connect } from 'react-redux';
import { setUsers, unfollow, follow, setCurrentPage, setTotalCount, setIsFetching, toggleFollowingProgress, getUsersThunk } from '../../redux/users_reducer';
import Users from './users';
import Preloader from '../Common/Preloader/preloader';
import { getUsers_data, getPage_size, getTotal_page, getCurrent_page, getIsFetching, getFollowingInProgress} from '../../redux/users_selector';

class UsersComponent extends React.Component {

    componentDidMount () {

        this.props.getUsersThunk(this.props.current_page, this.props.page_size); 
    }

        onPageChanged = (el) => {
        this.props.setCurrentPage(el);   
        this.props.getUsersThunk( el, this.props.page_size); 
           
        }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users 
            total_page= {this.props.total_page}
            page_size= {this.props.page_size}
            current_page= {this.props.current_page}
            onPageChanged= {this.onPageChanged}
            follow= {this.props.follow}
            unfollow= {this.props.unfollow}
            users_data= {this.props.users_data}
            toggleFollowingProgress= {this.props.toggleFollowingProgress}
            followingInProgress= {this.props.followingInProgress}
            />
        </>
    }
}  
    
let mapStateToProps = (state) => {
   
    return {
        users_data: getUsers_data(state),
        page_size:  getPage_size(state),
        total_page:  getTotal_page(state),
        current_page:  getCurrent_page(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
        
    }
};

const UsersContainer = connect(mapStateToProps, {follow, 
                                                unfollow,
                                                setUsers, 
                                                setCurrentPage, 
                                                setTotalCount,  
                                                setIsFetching,
                                                toggleFollowingProgress,
                                                getUsersThunk})(UsersComponent);
export default UsersContainer;

