import prodExample from "./prod.png"

function ItemDetail(props) {
    return (
        <div className="ItemDetail">
            <h2> {props.data.name}</h2>
                <div className='detailsCtn'>
                    <div className="imgCtn">
                        <img className="itemImage" src={prodExample} alt="" />
                    </div>
                    <div className='dataCtn'>
                        <ul>
                            <li> Price: ${props.data.price}</li>
                            <li>Size: {props.data.size}</li>
                            <li>Color: {props.data.color}</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail