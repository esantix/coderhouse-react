import React, { Children, useContext } from 'react'
import { useState, useEffect } from "react"


export const CartContext = React.createContext("AAA");

export function CartContextProvider(props) { // provider FROM something TO context
    const [cartData, setcartData] = useState([]);

    function addCartData(newItem) {

        let newValue = cartData
        newValue.push(newItem)
        console.log(":)")
        console.log(newItem)
        setcartData(newValue)

        console.log(cartData)
    }


    return <CartContext.Provider value={addCartData  }>
        {props.children}
    </CartContext.Provider>


}


// cartData ={

//     id1: amount1, 
//     id2: amount2

// }


