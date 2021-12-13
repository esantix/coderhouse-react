import ItemCount from "./ItemCount"


function ListItem(props){
    return (

        <li className="ListItem"><ItemCount></ItemCount>{props.children}</li> 
    )

}


function ItemListContainer(props) {

    return (
        <div className="item-list-ctn">
            <div>
                <p id="greeting-msg"> {props.greeting} </p>
            </div>
            <ul>
                <ListItem>E-Commerce pages</ListItem> 
                <ListItem>Personal pages </ListItem>
                <ListItem> Institutional pages </ListItem>
            </ul>
        </div>
    )
}

export default ItemListContainer