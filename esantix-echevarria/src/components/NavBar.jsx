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
            <div id="nav-logo">ESANTIX</div>
            <div className="tabs-ctn">
                <BarBtn name="Products" />
                <BarBtn name="Information" />
                <BarBtn name="Help" />
            </div>



        </div>
    )

}


export default NavBar