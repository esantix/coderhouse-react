import ItemCount from "./ItemCount"
import ItemDetailContainer from "./ItemDetailContainer"
import { Link } from 'react-router-dom';

function Item(props) {

    console.log(props.itemId)
    return (
        <Link to={`/item/${props.itemId}`}>
            <div className="Item">

                <ItemDetailContainer itemId={props.itemId} />
                <ItemCount stock={props.stock} />
            </div> </Link>
    )

}

export default Item