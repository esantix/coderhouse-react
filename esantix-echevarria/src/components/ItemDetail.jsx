import { useState, useEffect } from 'react';
import prodExample from "./prod.png"
import LoadingBanner from './LoadingBanner'

const FAKE_DETAILS_DB = {
    1: {
        name: "Product-1",
        price: "100",
        size: "small",
        color: "Blue"
    },
    2: {
        name: "Product-2",
        price: "500",
        size: "medium",
        color: "Green"
    },
    3: {
        name: "Product-3",
        price: "800",
        size: "big",
        color: "Red"
    },
    4: {
        name: "Product-4",
        price: "1200",
        size: "large",
        color: "Yellow"
    }
}


function ItemDetail(props) {

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState({
        name: "",
        price: "-",
        size: "-",
        color:"-"
    });

    async function getItemData(id) {
        // Esto deberia ser un fetch con el ID del prioducto
        await new Promise(resolve => setTimeout(resolve, 1000)).then(
            () => {
                setItemData(FAKE_DETAILS_DB[id]); setLoading(false);
            })
    }

    useEffect(() => { getItemData(props.itemId) }, []);


    return (

        <div className="ItemDetail">
            <h2> {itemData.name}</h2>
            {loading ? <LoadingBanner msg="LOADING DETAILS..." /> :
                <div className='detailsCtn'>
                    <div className="imgCtn">
                        <img clasName="itemImage" src={prodExample} alt="" />
                    </div>
                    <div className='dataCtn'>
                        <ul>
                            <li> Price: ${itemData.price}</li>
                            <li>Size: {itemData.size}</li>
                            <li>Color: {itemData.color}</li>

                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail