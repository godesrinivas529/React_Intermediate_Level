import AuthorsData from "./AutData.json";
import AuthorCard from "./AuthorCard";

const MostCommented = () => {

  const handleBlogButton = (e, title) => {
    e.preventDefault();
    alert(`Displaying ${title} profile`);
  };

  const filteredData = AuthorsData.slice().sort((a, b) => b.mostCommented - a.mostCommented); 
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

export default MostCommented;