import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const SendOrder = () => {
  const [orderId, setOrderId] = useState();
  const order = { name: "santiago", phone: "11111", email: "santiago@gmail.com" ,
    items: ["8" ],
    price: 8,
  };
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
};
export default SendOrder;