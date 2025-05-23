import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return(
        <div className="componentstyle">
            <h2 className="compInfo">OOPS! Page Not Found</h2>
            <button className='compButton' onClick={handleNavigate}>Back to Home Page</button>
        </div>
    )
}

export default NotFound