
import { useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";
import { useState } from "react";
import Blogs from "./Blogs/Blogs";

const AllBlogs = () => {
    UseTitle("AllTourist");
    const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState(allBlogs);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to filter blogs by category
    const filterByCategory = category => {
        if (category === selectedCategory) {
            setSelectedCategory(null); // Deselect category if it's already selected
        } else {
            setSelectedCategory(category); // Select new category
        }
    };

    // Filter blogs based on selected category
    const filteredBlogs = selectedCategory
        ? blogs.filter(blog => blog.category === selectedCategory)
        : blogs;

    return (
        <div className="lg:mx-20">
            <div className="flex justify-center">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] items-center text-white">
                            Filter By <img src={'https://i.ibb.co/VNYc5qD/Frame-1.png'} alt="sort icon" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => filterByCategory("Food")}>Food</a></li>
                            <li><a onClick={() => filterByCategory("Travel")}>Travel</a></li>
                            <li><a onClick={() => filterByCategory("Technology")}>Technology</a></li>
                            <li><a onClick={() => filterByCategory("Tech")}>Tech</a></li>
                            <li><a onClick={() => filterByCategory("Wellness")}>Wellness</a></li>
                            <li><a onClick={() => filterByCategory("Science")}>Science</a></li>
                            <li><a onClick={() => filterByCategory(null)}>All Blogs showing</a></li> {/* Option to clear filter */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map(blog => (
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
