import AuthorsData from "./AutData.json";
import AuthorCard from "./AuthorCard";

const MostLiked = () => {

  const handleBlogButton = (e, title) => {
    e.preventDefault();
    alert(`Displaying ${title} profile`);
  };

  const filteredData = AuthorsData.slice().sort((a, b) => b.mostliked - a.mostliked); 
  return (
    <div className="blog">
      {filteredData.map(({ id, title, image }) => (
        <AuthorCard
          key={id}
          title={title}
          image={image}
          handleBlogButton={handleBlogButton}
        />
      ))}
    </div>
  );
};

export default MostLiked;