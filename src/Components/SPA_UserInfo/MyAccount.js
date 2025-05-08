import { useNavigate } from "react-router-dom"
const MyAccount = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }

    return(
        <div className="componentstyle">
            <h2 className="compInfo">Account Information</h2>
            <button className='compButton' onClick={handleNavigate}>Back to Home Page</button>
        </div>
    )
}

export default MyAccount