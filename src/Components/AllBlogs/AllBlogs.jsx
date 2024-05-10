import { useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";
import { useState } from "react";
import Blogs from "./Blogs/Blogs";

const AllBlogs = () => {
    UseTitle("AllTourist");
    const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState(allBlogs);

    // const handleSortByChange = () => {
    //     // Sort tourists array in descending order based on average_cost
    //     const sortedTourists = [...tourists].sort((a, b) => parseInt(b.cost) - parseInt(a.cost));
    //     setTourists(sortedTourists);
    // };
    
    return (
        <div className="lg:mx-20">
            <div className="flex justify-center">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] items-center text-white">
                            Sort By <img src={'https://i.ibb.co/VNYc5qD/Frame-1.png'} alt="sort icon" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><a>Average Cost</a></li>
                            {/* onClick={handleSortByChange} */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <Blogs
                        key={blog._id}
                        blog={blog}
                        blogs={blogs}
                        setBlogs={setBlogs}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllBlogs;