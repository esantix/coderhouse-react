import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useState } from "react";


function CartRegister(props) {
  const value = useContext(CartContext);

  let removeCartItem = value[2];
  let amount = props.amount;

  function removeItem() {
    removeCartItem(props.name);
    props.fix(1)
  }

  return (
    <div className="cartReg">
      <p className="cartRegname">{props.name}</p>
      <p className="cartRegamount">{amount}</p>
      <p className="cartRegprice">${props.price}</p>
      <div className="remButton" onClick={removeItem}>
        Remove item
      </div>
    </div>
  );
}

function Cart() {

  const [state, setstate] = useState(0);

  const value = useContext(CartContext);

  let cartData = value[1];
  function clearCart() {
    value[3]([]);
  }
  let submitedItems = Object.entries(cartData);
  let content = [];
  let price = 10;

  let totalPrice = 0;

  if (submitedItems.length === 0) {
    content = <p>No items to display</p>;
  } else {
    content = submitedItems.map(([key, value]) => {
      totalPrice += value * price;
      return <CartRegister key={value} 
      name={key} amount={value} 
      fix={ setstate }
      price={price}  />;
    });
  }

  return (
    <div className="cartView">
      <h2>Your cart:</h2>
      <div className="cartReg header">
      <p className="cartRegname">Description</p>
      <p className="cartRegamount">Amount</p>
      <p className="cartRegprice">Unit price</p>

    </div>
      {content}

      <h2>Total price: ${totalPrice}</h2>
      <div className="remButton" onClick={clearCart}>
        {" "}
        CLEAR CART
      </div>

      
    </div>
  );
}

export default Cart;
