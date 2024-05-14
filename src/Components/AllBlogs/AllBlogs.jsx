
import { useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";
import { useState } from "react";
import Blogs from "./Blogs/Blogs";

const AllBlogs = () => {
    UseTitle("AllTourist");
    const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState(allBlogs);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Function to filter blogs by category
    const filterByCategory = category => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    // Function to filter blogs by search query
    const filterBySearch = query => {
        setSearchQuery(query.toLowerCase());
    };

    // Filter blogs based on selected category
    const filteredByCategory = selectedCategory
        ? blogs.filter(blog => blog.category === selectedCategory)
        : blogs;

    // Filter blogs based on search query
    const filteredBySearch = searchQuery
        ? filteredByCategory.filter(blog => blog.title.toLowerCase().includes(searchQuery))
        : filteredByCategory;

    return (
        <div className="lg:mx-20 mt-10">
            <div className="flex justify-center">
                <div className=" flex flex-row space-x-10 mb-5 ">
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
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input 
                                type="text" 
                                className="grow" 
                                placeholder="Search blogs by title." 
                                value={searchQuery}
                                onChange={e => filterBySearch(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBySearch.map(blog => (
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

