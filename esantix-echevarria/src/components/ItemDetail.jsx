import { useState } from 'react';
import prodExample from "./prod.png"




function ItemDetail(props) {
    const [itemData, setItemData] = useState({
        name: "Initial name",
        price: "N/A",
        size: "N/A"

    });

    function getItemData() {
        // usat item id para tener su infode un fetch
        const fakeData = {
            name: "Some name",
            price: "100$",
            size: "big"
        }
        setItemData(fakeData)
    }

    getItemData()
    return (
        <div className="ItemDetail">
            <h2> {itemData.name}</h2>
            <div className='detailsCtn'>
                <div className="imgCtn">
                    <img clasName="itemImage" src={prodExample} alt="" />
                </div>
                <div className='dataCtn'>
                    <ul>
                        <li> Price: {itemData.price}</li>
                        <li>Size: {itemData.size}</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail