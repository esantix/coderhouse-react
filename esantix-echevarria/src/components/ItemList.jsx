
import Item from "./Item"


function ItemList(props) {

    return (

        <div className="ItemList">
            {
                props.data.map(
                    (elem) => {
                        return <Item stock={elem.stock} itemId={elem.id} key={elem.id} name={elem.name} />
                    }
                )
            }

        </div>
    )
}

export default ItemList