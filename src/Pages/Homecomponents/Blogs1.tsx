import { useParams } from 'react-router-dom';
import blogData from '../blogs.dummy.json'
function Blogs() {

    const { id } = useParams();
    const selectBlog = blogData.find(blog => blog.id.toString() === id); 
  return (
   
    <div>
    <div>
    <p className="tittle" style={{textAlign:"center",fontSize:"60px",fontWeight:"bold"}}>Blog !</p>
    <p className="content"style={{textAlign:"center",fontSize:"40px"}}>
    {selectBlog ? selectBlog.content :null}
    </p>
    </div>
     </div>
    
  )
}

export default Blogs