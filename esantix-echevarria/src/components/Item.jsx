import ItemCount from "./ItemCount"
import ItemDetailContainer from "./ItemDetailContainer"


function Item(props) {


    return (

        <div className="Item">
            <ItemDetailContainer itemId={props.itemId}/>
            <ItemCount stock={props.stock} />
        </div>
    )

}

export default Item