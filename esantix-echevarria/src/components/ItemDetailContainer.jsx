
import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


function ItemDetailContainer(props) {
    let itemIds = props.itemId


    const { id} = useParams();
    console.log("PARAM " + id)
    
    useEffect(  ()=>{itemIds = id}, [id] )

    return (
        <div>
            <ItemDetail itemId={itemIds}/>
        </div>
    )
}

export default ItemDetailContainer