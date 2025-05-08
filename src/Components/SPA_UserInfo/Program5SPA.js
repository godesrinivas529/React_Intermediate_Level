import Home from "./Home"
import MyAccount from "./MyAccount"
import MyProfile from "./MyProfile"
import Navbar from "./Navbar"
import UserInfo from "./UserInfo"
import Footer from "./Footer"
import {Routes, Route} from 'react-router-dom'
import NotFound from "./NotFound"

const Program5SPA = () => {
    return(
        <>
        <h3>Single Page Application UI</h3>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer />
            <hr />
        </>
    )
}

export default Program5SPA