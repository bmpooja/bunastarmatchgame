import React from 'react';

const PlayNumberComponent= props =>{   
    return(
    <>
    <button className="number" onClick ={()=> console.log ('Num', props.num)}>
    {props.num}
    </button>
</>
    )}

export default PlayNumberComponent;