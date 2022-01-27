import { useState } from 'react';

function ItemCount(props) {

    const [state, setState] = useState(0);
    const [finished, setFinished] = useState(false);

    const add = () => {
        if (state < Number(props.stock)) { setState(state + 1) }
        else { alert("Sorry that's all we got!") }
    };
    const subs = () => {
        if (state >= 1) { setState(state - 1) }
    }

    const finishPurchase =() => {
        setFinished(true)

    }


    const submitPurchase = () => {
        const submitCounter = new CustomEvent('submitCounter', { detail: { amount: state} });

        if (state >= 1) { window.dispatchEvent(submitCounter); console.log("submitCounter triggered") }
        else { alert("Quantity must be larger than 0") }
    }


    if (finished){
        return <div></div>
    } else{
    return (
        
         (<div className='ItemCount'>
          <div className="counterCtn">
                <div className="counterChange" onClick={add}><p>+</p></div>
                <div className="counterValue"> {state}</div>
                <div className="counterChange" onClick={subs} ><p>-</p></div>
            </div>
            <div className="counterAdd" >
                <p className='counterbtn' onClick={submitPurchase} >Add to cart</p>
                <p className='counterbtn'  onClick={finishPurchase}>Finish purchase</p>

            </div>


        </div>)
    )}

}

export default ItemCount