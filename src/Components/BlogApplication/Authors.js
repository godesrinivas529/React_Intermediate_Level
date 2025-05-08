import AuthorsData from "./AutData.json";
import AuthorCard from "./AuthorCard"; // Import the reusable component

const Authors = () => {
  const handleBlogButton = (e, title) => {
    e.preventDefault();
    alert(`Viewing ${title} profile`);
  };

  return (
    <div className="blog">
      {AuthorsData.map((eachItem) => {
        const {id, title, image} = eachItem
        return <AuthorCard 
          key={id} 
          title={title} 
          image={image} 
          handleBlogButton={handleBlogButton} 
        />
    })}
    </div>
  );
};

export default Authors;