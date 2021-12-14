
import loadingGif from "./loading.gif"
import { useState } from 'react';
import Item from "./Item"



function LoadingBanner(props) {

    return <div className="loadingBanner"><p>{props.msg}</p>  <img src={loadingGif} alt="" /></div>
}


function ItemListContainer(props) {
    const [catalogue, setCatalogue] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItems() {
        // simular un fetch lento
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCatalogue([
            { "name": 'Product-1', "id": "1", "stock": 10, "price": 10 },
            { "name": 'Product-2', "id": "2", "stock": 2, "price": 10 },
            { "name": 'Product-3', "id": "3", "stock": 10, "price": 10 },
            { "name": 'Product-4', "id": "4", "stock": 10, "price": 10 },
        ])
        setLoading(false)

    }

    getItems()

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
                            return <Item stock={elem.stock} name={elem.name} itemId={elem.id} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ItemListContainer