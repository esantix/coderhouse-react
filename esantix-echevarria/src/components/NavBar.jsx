import CartWidget from "./CartWidget"

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
            <div id="nav-logo">
                <p>eSantix Designs</p>
            </div>
            <div className="tabs-ctn">
                <BarBtn name="Works" />
                <BarBtn name="Information" />
                <BarBtn name="Contact us" />
                <CartWidget> </CartWidget>
            </div>



        </div>
    )

}


export default NavBar