import { useState, useEffect } from 'react';
import prodExample from "./prod.png"

const FAKE_DB = {
            1: {
                name: "Product-1",
                price: "100",
                size: "small"
            },
            2: {
                name: "Product-2",
                price: "1500",
                size: "large"
            },
            3: {
                name: "Product-3",
                price: "200",
                size: "big"
            },
            4: {
                name: "Product-4",
                price: "160",
                size: "medium"
            }
        }


function ItemDetail(props) {
    const [itemData, setItemData] = useState({
        name: "Product-1",
        price: "100",
        size: "small"
    });

    async function getItemData(id) {
        // Esto deberia ser un fetch con el ID del prioducto
      await new Promise( () => {setItemData(FAKE_DB[id])})
    }

    useEffect(() => {getItemData(props.itemId)}, []);
    

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