import React from 'react';
import {StarMatchComponent,utils} from './StarMatchComponent';
import './Star.css'

const StarDisplayComponent =(props)=>{
    console.log(props)
    return(
        <>
        {utils.range(1,props.count).map(starId=> 
        <div key={starId} className ="star"></div>)
        }
        </>
    )
}

export default StarDisplayComponent;