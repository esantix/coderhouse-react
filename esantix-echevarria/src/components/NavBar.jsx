const BarBtn = (props) => {
    return (
        <div className="BarBtn-ctn">
            <div className="BarBtn">
                <img src="" alt="" />
                <p> {props.name}</p>
                </div>

        </div>
    )
}


function NavBar(props) {

    return (
        <div className="NavBar">


            <BarBtn name="Products" />
            <BarBtn name="Information" />
            <BarBtn name="Help" />

        </div>
    )

}


export default NavBar