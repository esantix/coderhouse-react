import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import LoadingBanner from "./LoadingBanner";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);

  const  { id } = useParams()

  const [itemData, setItemData] = useState({
    name: "-",
    price: "-",
    size: "-",
    color: "-",
  });

  
  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "misProductos", id);
    getDoc(ref).then((snapshot) => {
      console.log(snapshot.data());
      setItemData(snapshot.data());
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <LoadingBanner msg="LOADING DETAILS..." />
      ) : (
        <ItemDetail data={itemData} id={id}/>
      )}
    </div>
  );
}

export default ItemDetailContainer;
