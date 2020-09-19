import React from 'react';
import Paginator from './Paginator';
import User from './User';

let Users = ({total_item, page_size, onPageChanged, current_page, followingInProgress, unfollow, follow, users_data}) => {
    
    return (

        <div>
            <Paginator total_item= {total_item} 
                       onPageChanged= {onPageChanged} 
                       current_page= {current_page}
                       portion_size= {10}
                       page_size= {page_size}/>

            <div>
                {users_data.map(el => <User key= {el.id} 
                                            user= {el} 
                                            followingInProgress= {followingInProgress} 
                                            unfollow= {unfollow} 
                                            follow= {follow}/>)}
            </div>                                  
        </div>)
};

export default Users;