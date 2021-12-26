
import prodExample from "./prod.png"
import { useState, useEffect, useCallback } from "react"
import ItemCount from "./ItemCount"


function ItemDetail(props) {
    const [qtyAdded, setQtyAdded] = useState(0);

    const sumbitCounterHandler = useCallback( (evt) => {
        console.log(evt)
        setQtyAdded(evt.detail.amount)
        alert(qtyAdded)
         }
    )

    useEffect(() => {
        window.addEventListener('submitCounter', sumbitCounterHandler)
   
        return () => {
            window.removeEventListener('submitCounter', sumbitCounterHandler)
   
        };
    }, [sumbitCounterHandler]);


    return (
        <div className="ItemDetail">
            <h2> {props.data.name}</h2>
                <div className='detailsCtn'>
                    <div className="imgCtn">
                        <img className="itemImage" src={prodExample} alt="" />
                    </div>
                    <div className='dataCtn'>
                        <ul>
                            <li> Price: ${props.data.price}</li>
                            <li>Size: {props.data.size}</li>
                            <li>Color: {props.data.color}</li>
                        </ul>
                    </div>
                </div>
                <ItemCount stock={props.data.stock}/>
        </div>
    )
}

export default ItemDetail