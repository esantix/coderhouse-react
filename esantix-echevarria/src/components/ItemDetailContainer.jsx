
import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


function ItemDetailContainer(props) {
    

    const {id} = useParams();

useEffect(()=>{console.log("ID is:..." + id)},[id])

    return (
        <div>
            <ItemDetail itemId={id}/>
        </div>
    )
}

export default ItemDetailContainer