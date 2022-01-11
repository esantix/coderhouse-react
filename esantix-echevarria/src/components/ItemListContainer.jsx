
import { useState , useEffect} from 'react';
import ItemList from "./ItemList"
import LoadingBanner from './LoadingBanner'
import FAKE_CATALOGUE from '../js/catalogueData';


function ItemListContainer(props) {
    const [catalogue, setCatalogue] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItems() {
        // simular un fetch lento
        await new Promise(resolve => setTimeout(resolve, 13))
            .then(() => {
            setCatalogue(FAKE_CATALOGUE);
            setLoading(false);
            });
    }

    useEffect(() => {getItems()}, []);

    return (
        <div>
            <div className="ItemListCtn">
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