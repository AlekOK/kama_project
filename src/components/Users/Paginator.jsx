import React from 'react';
import sss from './users.module.css';

const Paginator = (props) => {
       
    let pagesCount = Math.ceil( props.total_page / props.page_size);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        
        <div>
            {pages.map(el => {
                return <span onClick={(e) => { props.onPageChanged(el) }} 
                             className={props.current_page === el && sss.selectedPage}> {el} </span>
            })}
        </div> 
    )   
};        

export default Paginator;