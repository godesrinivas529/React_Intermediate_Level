import { NavLink } from "react-router-dom"

const Navigation = () => {
    return(
        <>
            <nav>
                <NavLink to='/'>Authors</NavLink>
                <NavLink to='/mostliked'>MostLiked</NavLink>
                <NavLink to='/mostcommented'>MostCommented</NavLink>
            </nav>
        </>
    )
}

export default Navigation