import React, { Children, useContext } from 'react'
import { useState, useEffect } from "react"


export const CartContext = React.createContext("AAA");

export function CartContextProvider(props) { // provider FROM something TO context
    const [cartData, setcartData] = useState([]);

    function addCartData(newItem) { // AddItem  newItem = [myname, amount]
        console.log(newItem )
        let newValue = cartData
        newValue[newItem[0]] = newItem[1]

        setcartData(newValue)

        console.log(cartData)
    }

    function removeCartData(itemName) { 
   
        let newValue = cartData
        newValue[itemName] = 0

        setcartData(newValue)

        console.log(cartData)

    }



    return <CartContext.Provider value={[addCartData, cartData, removeCartData]}>
        {props.children}
    </CartContext.Provider>


}


// cartData ={

//     id1: amount1, 
//     id2: amount2

// }


