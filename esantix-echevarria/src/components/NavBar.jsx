import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';

const BarBtn = (props) => {
    return (

        <Link to={props.to} className="BarBtn-ctn">
            <div className="BarBtn">
                <p> {props.name}</p>
            </div>

        </Link>
    )
}


function NavBar(props) {

    return (
        <div className="NavBar">

            <Link to="/"> 
                <div id="nav-logo">
                    <p>eSantix Designs</p>
                </div>
            </Link>

            <div className="tabs-ctn">
                <BarBtn name="Products" to="/" />
                <BarBtn name="Information" to=""/>
                <BarBtn name="Contact us" to="" />
                <CartWidget> </CartWidget>
            </div>



        </div>
    )

}


export default NavBar