
import prodExample from "./prod.png"
import { useState, useEffect, useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../contexts/CartContext";


function ItemDetail(props) {
    const addCartData = useContext(CartContext);

    console.log("-------")
    console.log(typeof (pepe))



    const onAdd =
        (evt) => {
            console.log(evt)   
            let myname = props.data.name
            let amount = evt.detail.amount
 
            addCartData([myname, amount])
        }


    useEffect(() => {
        window.addEventListener('submitCounter', onAdd)
        

        return () => {
            window.removeEventListener('submitCounter', onAdd)

        };
    }, []);


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



