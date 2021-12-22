import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';

const BarBtn = (props) => {
    return (
        <div className="BarBtn-ctn">
            <div className="BarBtn">
                <p> {props.name}</p>
            </div>

        </div>
    )
}


function NavBar(props) {

    return (
        <div className="NavBar">

            <Link to="/"> <div id="nav-logo">
                <p>eSantix Designs</p>
            </div></Link>

            <div className="tabs-ctn">
                <BarBtn name="Products" />
                <BarBtn name="Information" />
                <BarBtn name="Contact us" />
                <CartWidget> </CartWidget>
            </div>



        </div>
    )

}


export default NavBar