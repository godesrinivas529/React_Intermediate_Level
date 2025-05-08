import { useNavigate } from "react-router-dom"
const UserInfo = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }

    return(
        <div className="componentstyle">
            <h2 className="compInfo">User Information</h2>
            <button className='compButton' onClick={handleNavigate}>Back to Home Page</button>
        </div>

    )
}

export default UserInfo