import ItemCount from "./ItemCount"


function ListItem(props){
    return (

        <li className="ListItem"><ItemCount stock={props.stock}></ItemCount>{props.children}</li> 
    )

}



function ItemListContainer(props) {
    // El stock vendrá de una base de datos son un fetch

    return (
        <div className="item-list-ctn">
            <div>
                <p id="greeting-msg"> {props.greeting} </p>
            </div>
            <ul>
                <ListItem stock="2" >E-Commerce pages</ListItem> 
                <ListItem stock="10">Personal pages </ListItem>
                <ListItem stock="4"> Institutional pages </ListItem>
            </ul>
        </div>
    )
}

export default ItemListContainer