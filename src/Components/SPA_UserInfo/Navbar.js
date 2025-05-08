import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar">
            <NavLink className='navLink' to='/userinfo'>UserInfo</NavLink>
            <NavLink className='navLink' to='/myaccount'>MyAccount</NavLink>
            <NavLink className='navLink' to='/myprofile'>MyProfile</NavLink>
        </nav>
    )
}

export default Navbar