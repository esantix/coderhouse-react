import ItemCount from "./ItemCount"
import prodExample from "./prod.png"

function ListItem(props) {
    return (

        <div className="ListItem">
            <h2> {props.name}</h2>
            <img clasName="itemImage" src={prodExample} alt="" />
            <ItemCount stock={props.stock} />
        </div>
    )

}


const elements = [
    { "name": 'Product-1', "stock": 10, "price": 10 },
    { "name": 'Product-2', "stock": 2, "price": 10 },
    { "name": 'Product-3', "stock": 10, "price": 10 },
    { "name": 'Product-4', "stock": 10, "price": 10 },


]



function ItemListContainer(props) {
    // El stock vendrá de una base de datos son un fetch

    return (
        <div>
            <div>
                <h1 id="greeting-msg"> {props.greeting} </h1>
            </div>
            <div className="ItemListContainer">

                {
                    elements.map(
                        (elem) => {
                            return (<ListItem stock={elem.stock} name={elem.name}>

                            </ListItem>)
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ItemListContainer