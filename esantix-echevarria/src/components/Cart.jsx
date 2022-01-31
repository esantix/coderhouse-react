import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function CartRegister(props) {
  const value = useContext(CartContext);

  let removeCartItem = value[2];
  let amount = props.amount;

  function removeItem() {
    removeCartItem(props.name);
    props.fix(1);
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
  const [orderId, setOrderId] = useState();
  function SendOrder() {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date = newDate.getDate();
    const order = {
      name: document.getElementById("namein").value,
      phone: document.getElementById("phonein").value,
      email: document.getElementById("mailin").value,
      items: cartData,
      date: date + "/" + month + "/" + year,
      price: totalPrice,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {setOrderId(id);
    alert("Purchase succesfull. Your order id: "+id)})
    
  }

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
      return (
        <CartRegister
          key={value}
          name={key}
          amount={value}
          fix={setstate}
          price={price}
        />
      );
    });
  }

  return (
    <div className="cartView">

      <div id="infoCart">
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
      <div id="orderForm">
        <h2>Fill in your information</h2>
        <p>
          Name:
          <input id="namein" type="text" />
        </p>

        <p>
          Mail: <input id="mailin" type="mail" />
        </p>

        <p>
          Phone: <input id="phonein" type="text" />
        </p>
      <button onClick={SendOrder}>ORDER</button>
      </div>
    </div>
  );
}

export default Cart;
