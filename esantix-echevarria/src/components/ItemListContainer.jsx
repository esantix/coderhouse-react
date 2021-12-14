
import { useState , useEffect} from 'react';
import Item from "./Item"
import LoadingBanner from './LoadingBanner'


const FAKE_CATALOGUE = [
    { "id": 1, "stock": 10 },
    { "id": 2, "stock": 2 },
    { "id": 3, "stock": 10 },
    { "id": 4, "stock": 10 }]



function ItemListContainer(props) {
    const [catalogue, setCatalogue] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItems() {
        // simular un fetch lento
        await new Promise(resolve => setTimeout(resolve, 1000))
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
                {
                    catalogue.map(
                        (elem) => {
                            return <Item stock={elem.stock} itemId={elem.id} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ItemListContainer