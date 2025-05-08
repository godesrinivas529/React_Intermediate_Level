const AuthorCard = ({ title, image, handleBlogButton }) => {
    return (
      <div className="innerBlog">
        <img className="blogImg" src={image} alt={title} />
        <h5 className="blogTitle">{title}</h5>
        <button onClick={(e) => handleBlogButton(e, title)} className="blogButton">
          Click to view profile
        </button>
      </div>
    );
  };
  
  export default AuthorCard;