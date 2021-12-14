
import loadingGif from "./loading.gif"

function LoadingBanner(props) {

    return <div className="loadingBanner">
        <p>{props.msg}</p>
        <img src={loadingGif} alt="" />
    </div>
}


export default LoadingBanner