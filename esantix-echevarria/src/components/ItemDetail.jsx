import { useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

function ItemDetail(props) {
  const value = useContext(CartContext);

  let addCartData = value[0];

  const onAdd = (evt) => {
    let myname = props.data.name;
    let amount = evt.detail.amount;

    addCartData([myname, amount]);
  };

  useEffect((a=onAdd) => {
    window.addEventListener("submitCounter", a);

    return () => {
      window.removeEventListener("submitCounter", a);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ItemDetail">
      <h2> {props.data.name}</h2>
      <div className="detailsCtn">
        <div className="imgCtn">
          <img className="itemImage" src={`https://picsum.photos/${props.id}00/300`} alt="" />
        </div>
        <div className="dataCtn">
          <ul>
            <li> Price: ${props.data.price}</li>
            <li>Size: {props.data.size}</li>
          </ul>
        </div>
      </div>
      <ItemCount stock={props.data.stock} />
    </div>
  );
}

export default ItemDetail;
