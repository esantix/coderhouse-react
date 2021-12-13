import { useState } from 'react';

function ItemCount(){

    const [state, setstate] = useState(0);

    const add = ()=>{setstate(state+1)};
    const subs = ()=>{ if(state >= 1){setstate(state-1)}}

    return(
        <div className="counterCtn">
          <div className="counterChange" onClick={add}>+</div>
          <div className="counterValue"> {state}</div>
          <div className="counterChange" onClick={subs} >-</div>
        </div>
    )
}

export default ItemCount