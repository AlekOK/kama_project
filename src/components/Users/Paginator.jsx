import React, { useState } from 'react';
import sss from './users.module.css';
import cn from 'classnames';

const Paginator = (props) => {
       
    let pagesCount = Math.ceil( props.total_item / props.page_size);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);  
    }

    let portionCount = ~~( props.total_item / props.portion_size);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portion_size + 1;
    let rightPortionPageNumber = portionNumber * props.portion_size; 

    return (
        
        <div className= {sss.paginator}>

            { portionNumber > 1 && 
            <button onClick= {() => {setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map( (el) => {
            return <span className= { cn ({ [sss.selectedPage]: props.current_page === el}, sss.pageNumber) }
                         key= {el}
                         onClick= { (e) => {props.onPageChanged(el)}} > {el} </span>}) }

            { portionCount > portionNumber && 
            <button onClick= {() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}            
            
        </div> 
    )   
};        

export default Paginator;