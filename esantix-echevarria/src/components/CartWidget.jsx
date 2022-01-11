import logo from "./cart_count.svg"
import { Link } from "react-router-dom"

function CartWidget (){

    return(
        <Link to="/cart">
            <img id="cart-logo" src={logo} alt="" />
        </Link>
    )
}

export default CartWidget