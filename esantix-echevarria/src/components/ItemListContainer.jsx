
import { useState , useEffect} from 'react';
import ItemList from "./ItemList"
import LoadingBanner from './LoadingBanner'

const FAKE_CATALOGUE = [
    { "id": 1, "stock": 10, "name": "Product - 1" },
    { "id": 2, "stock": 2, "name": "Product - 2"  },
    { "id": 3, "stock": 10, "name": "Product - 3"  },
    { "id": 4, "stock": 10, "name": "Product - 4"  }]



function ItemListContainer(props) {
    const [catalogue, setCatalogue] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItems() {
        // simular un fetch lento
        await new Promise(resolve => setTimeout(resolve, 1300))
            .then(() => {
                setCatalogue(FAKE_CATALOGUE);
                setLoading(false);
            });
    }

    useEffect(() => {getItems()}, []);

    return (
        <div>
            <div>
                <h1 id="greeting-msg"> {props.greeting} </h1>
            </div>
            <div className="ItemListContainer">
                {loading && <LoadingBanner msg="LOADING PRODUCTS..." />}
                <ItemList data={catalogue} ></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer