
import Item from "./Item"


function ItemList(props) {

    return (

            <div className="ItemList">
                         {
                    props.data.map(
                        (elem) => {
                            return <Item stock={elem.stock} itemId={elem.id} />
                        }
                    )
                }

        </div>
    )
}

export default ItemList