import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import UseTitle from "../../Title/UseTitle";
import Blogs from "../../AllBlogs/Blogs/Blogs";


const RecentBlog = () => {
    UseTitle("RecentBlog");
    const recentBlog = useLoaderData();
    const [blogs, setBlogs] = useState(recentBlog);
    
    // Slice the first 6 elements from the tourists array
    const last6Blogs = blogs.slice(-6).reverse();

    return (
        <div className=" lg:mx-10">
           
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8">
                {last6Blogs.map(blog => (
                    <Blogs 
                    key={blog._id}
                    blog={blog}
                    blogs={blogs}
                    setBlogs={setBlogs}>

                    </Blogs>
  
                ))}
            </div>
        </div>
    );
};

export default RecentBlog;