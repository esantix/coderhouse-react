import { useState } from 'react';

function ItemCount(props) {

    const [state, setstate] = useState(0);

    const add = () => { if (state < Number(props.stock)) { setstate(state + 1) } };
    const subs = () => { if (state >= 1) { setstate(state - 1) } }

    const addCart = () => { alert("Item/s added")}



    return (
        <div className='ItemCounterCtn'>
            <div className="counterCtn">
                <div className="counterChange" onClick={add}>+</div>
                <div className="counterValue"> {state}</div>
                <div className="counterChange" onClick={subs} >-</div>
            </div>
            <div className="counterAdd" onClick={addCart} > Add to cart </div>
        </div>
    )

}

export default ItemCount