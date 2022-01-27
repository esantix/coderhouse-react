
import { Link } from 'react-router-dom';

function Item(props) {

    return (
        <Link to={`/item/${props.itemId}`}>
            <div className="Item">
                <h1>{props.name}</h1>
      
                <img className="itemImage" src={`https://picsum.photos/${props.itemId}00/300`} alt="" />
                <div> See item details</div>
            </div> </Link>
    )

}

export default Item