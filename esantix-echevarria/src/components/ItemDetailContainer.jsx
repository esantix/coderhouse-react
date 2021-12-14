
import { useState } from 'react';
import ItemDetail from './ItemDetail'


function ItemDetailContainer(props) {

    return (
        <div>

            <ItemDetail itemId={props.itemId}/>
        </div>
    )
}

export default ItemDetailContainer