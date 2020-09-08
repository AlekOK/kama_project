import React from 'react';
import sss from './users.module.css';
import noob from '../../assets/images/users.jpg';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

    let pagesCount = Math.ceil( props.total_page / props.page_size);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(el => {
                return <span onClick={(e) => { props.onPageChanged(el) }} className={props.current_page === el && sss.selectedPage}> {el} </span>
            })}
            {props.users_data.map(el => <div key={el.id} className={sss.users}>

                <span>
                    <div>
                        <NavLink to= {'/profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : noob} className={sss.foto} />
                        </NavLink>
                    </div>
                    <div >
                        {el.followed  
                            ? <button disabled= {props.followingInProgress.some(id => id === el.id)} className={sss.buttonFoll} onClick={() => { 
                                props.unfollow(el.id)}}>Unfollow</button>
                            : <button disabled= {props.followingInProgress.some(id => id === el.id)} className={sss.buttonUnfoll} onClick={() => { 
                            props.follow( el.id)}}>Follow</button>
                        }
                    </div>
                </span>

                <span>
                    <span >
                        <div className={sss.info} className={sss.in}>{el.name}</div>
                        <div className={sss.info}>{el.status}</div>
                    </span>

                    <span>
                        <div className={sss.info}>{"el.location"}</div>

                    </span>

                </span>
            </div>)}
        </div>)
}


export default Users;