import LoadingIcon from '../../../public/images/loading.svg'
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
        <span className='loader-icon-wrapper'>
        <img src={LoadingIcon} />
        </span>
        Loading
    </div>
  )
}

export default Loader