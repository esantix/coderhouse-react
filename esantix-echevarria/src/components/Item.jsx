import ItemCount from "./ItemCount"
import prodExample from "./prod.png"

function Item(props) {
    return (

        <div className="ListItem">
            <h2> {props.name}</h2>
            <img clasName="itemImage" src={prodExample} alt="" />
            <ItemCount stock={props.stock} />
        </div>
    )

}

export default Item