import { useState } from 'react';
import cartLogo from "./cart.svg"

function ItemCount(props) {

    const [state, setState] = useState(0);

    const add = () => {
        if (state < Number(props.stock)) { setState(state + 1) }
        else { alert("Sorry that's all we got!") }
    };
    const subs = () => { if (state >= 1) { setState(state - 1) } }

    const addCart = () => { if(state >= 1){alert(`${state} item/s added`); setState(0) } else{alert("Quantity must be larger than 0")}}



    return (
        <div className='ItemCount'>
            <div className="counterCtn">
                <div className="counterChange" onClick={add}><p>+</p></div>
                <div className="counterValue"> {state}</div>
                <div className="counterChange" onClick={subs} ><p>-</p></div>
            </div>
            <div className="counterAdd" onClick={addCart} >
                <p>Add to cart</p>
                {/* <img src={cartLogo} alt="" /> */}
            </div>
        </div>
    )

}

export default ItemCount