import { useNavigate } from "react-router-dom";
import blogData from './blogs.dummy.json';

function Home() {
  const navigate = useNavigate();
  const handleBlogClick = (id:number ) => {
    navigate(`/blog/${id}`);
  };
  
  return (
   <div className="home" style={{ display: "flex", gap: "40px", marginTop: "40px", justifyContent: "center", fontSize: "30px", backgroundColor: "lightblue" }}>
    {blogData.map((blog, index) => (
      <div className="blog-list" key={index}>
        <span className="blog-item" style={{ cursor: "grab" }}  onClick={() => handleBlogClick(blog.id)}>{blog.name}</span>
        </div>
      ))}
    </div>

  );
}
//export default blogData;

export default Home;


