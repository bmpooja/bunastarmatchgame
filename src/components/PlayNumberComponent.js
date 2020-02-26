import React from 'react';
import {StarMatchComponent,colors,onNumberClick} from './StarMatchComponent';
 

const PlayNumberComponent= props =>{   
    return(
    <>
    <button className="number"
    style ={{background :colors[props.status]}}
     onClick ={()=>props.onClick(props.num ,props.status)}>
    {props.num}
    </button>
</>
    )}

export default PlayNumberComponent;