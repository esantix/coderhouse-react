


function ItemListContainer(props) {

    return (
        <div className="item-list-ctn">
            <div>
                <p id="greeting-msg"> {props.greeting} </p>
            </div>
            <ul>
                <li>E-Commerce pages</li>
                <li>Personal pages</li>
                <li>Institutional pages</li>
            </ul>
        </div>
    )
}

export default ItemListContainer