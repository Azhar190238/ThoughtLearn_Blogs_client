import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";

const BlogDetails = () => {
    UseTitle("ViewDetails");
    const blog = useLoaderData();

    return (
        <div className=" bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" h-full">
                    <img src={blog.photo} className="max-w-sm md:h-[500px] rounded-lg shadow-2xl" />
                </div>

                <div className="pl-10 space-y-4 ">
                    <h1 className="text-2xl font-bold"><span className="text-3xl" >Title:</span> {blog.title}</h1>
                    <div className="flex space-x-3">

                        <p className="w-full text-lg"><span className="font-bold text-xl">Blog Category: </span> {blog.category}</p>

                    </div>
                    <div className="flex space-x-3">
                        <p className="w-full text-lg"><span className="font-bold text-xl">Short description: </span>  {blog.short_description}</p>

                    </div>

                    <div className="flex space-x-3">
                        <p className="w-full text-xl"><span className="font-bold">Long description: </span>  {blog.long_description}</p>

                    </div>
                    <div className="mx-auto text-xl">
                        <Link to={`/updatedBlog/${blog._id}`}><button className="btn btn-wide btn-primary">Updated Blog</button></Link>

                    </div>
                </div>
            </div>

            <div className="mx-20 space-y-4">
                <p className="font-bold text-xl"> Please be Comment.  </p>
                <textarea placeholder="Comment here" className="textarea textarea-bordered textarea-md w-full " ></textarea>
            </div>
        </div>
    );
};

export default BlogDetails;