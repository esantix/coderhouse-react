import { useState } from 'react';
import cartLogo from "./cart.svg"

function ItemCount(props) {

    const [state, setstate] = useState(0);

    const add = () => { if (state < Number(props.stock)) { setstate(state + 1) }  else{alert("Sorry that's all we got!")}};
    const subs = () => { if (state >= 1) { setstate(state - 1) } }

    const addCart = () => { alert("Item/s added") }



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