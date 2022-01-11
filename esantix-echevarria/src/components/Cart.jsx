import { CartContext } from "../contexts/CartContext";

import { useState, useEffect, useContext } from "react"
   


function Cart (){
    const value = useContext(CartContext);
    console.log("CART is showing")
    let cartData= value[1]
    let removeCartItem = value[2]
    console.log(typeof(cartData))
    console.log(cartData)


    function removeItem() {
        removeCartItem()
    }


    return(
        <div className="cartView">


            {Object.entries(cartData).map(
                key => {
                    return (
                    <div className="cartReg">
                        <h3>{key}</h3>
                        <p>{cartData[key]}</p>
                        <div onClick={removeItem} >REMOVE</div>
                    </div>)
                })}
        </div>
    )
}

export default Cart