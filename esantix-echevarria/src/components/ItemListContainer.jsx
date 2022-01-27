import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import LoadingBanner from "./LoadingBanner";
import { collection, getDocs, getFirestore } from "firebase/firestore";


function ItemListContainer(props) {
  const [catalogue, setCatalogue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const ref = collection(db, "misProductos");
    getDocs(ref).then((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setCatalogue(postData);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="ItemListCtn">
        <h1 id="greeting-msg"> {props.greeting} </h1>

      
      </div>
      <div className="ItemListContainer">
        {loading && <LoadingBanner msg="LOADING PRODUCTS..." />}
        <ItemList data={catalogue}></ItemList>
      </div>
    </div>
  );
}

export default ItemListContainer;
