import React from "react";
import { useState } from "react";

export const CartContext = React.createContext("AAA");

export function CartContextProvider(props) {
  // provider FROM something TO context
  const [cartData, setcartData] = useState([]);

  function addCartData(newItem) {

    let newValue = cartData;
    newValue[newItem[0]] = newItem[1];

    setcartData(newValue);
    console.log("Added item. Cart is:");
    console.log(cartData);
  }

  function removeCartData(itemName) {

    if(isInCart(itemName)){
       let newValue = cartData;
    delete newValue[itemName]

    setcartData(newValue);
    console.log("Removed item. Cart is:");
    console.log(cartData); 
    }
    else{
        console.log("Nothing to remove")
    }
    
  }

  function isInCart(itemName) {
    if ( cartData[itemName] !== undefined  ) {
      console.log("isInCart: true");
      return true;
    } else {
      console.log("isInCart: false");
      return false;
    }
  }

  return (
    <CartContext.Provider value={[addCartData, cartData, removeCartData, setcartData]}>
      {props.children}
    </CartContext.Provider>
  );
}
