import Authors from "./Authors";
import MostLiked from "./MostLiked";
import MostCommented from "./MostCommented";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./Navigation";
import PageNotFound from "./PageNotFound";

const BlogApp = () => {
    return(
            <>
                <h3>Blog Application</h3>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Authors />} />
                    <Route path="/mostliked" element={<MostLiked />} />
                    <Route path="/mostcommented" element={<MostCommented />} />
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
                <hr />
            </>
    )
}

export default BlogApp