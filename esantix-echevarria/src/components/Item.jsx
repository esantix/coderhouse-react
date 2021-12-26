
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

function Item(props) {

    console.log(props.itemId)
    return (
        <Link to={`/item/${props.itemId}`}>
            <div className="Item">
                <h1>{props.name}</h1>
           
                <ItemCount stock={props.stock} />
            </div> </Link>
    )

}

export default Item