import React from 'react';
import preloader from '../../../assets/images/preloader.png';

let Preloader = (props) => {
    return (
        <div style= { {backgroundColor: 'white'} }>
            <img src= {preloader} ></img>
        </div>
    )
}

export default Preloader;