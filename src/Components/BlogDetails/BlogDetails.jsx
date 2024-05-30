
import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";


const BlogDetails = () => {
    UseTitle("ViewDetails");
    const blog = useLoaderData();
    const { user } = useContext(authContext);
    const [allComments, setAllComments] = useState([]);
    const isBlogAuthor = user?.email === blog.email;
    
    useEffect(() => {
        fetchComments(blog._id);
    }, [blog._id]);

    const fetchComments = (blogId) => {
        fetch(`http://localhost:5000/comments/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setAllComments(data);
            })
          
            .catch(error => console.error("Error fetching comments:", error));
            
    };


    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const commentText = form.comment.value;
    
        const newComment = {
            comment: commentText,
            blogId: blog._id,
            userName: user?.displayName,
            userProfilePic: user?.photoURL // Adjust this based on your actual user object structure
        };
    
        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "New Comment added Successfully!",
                        icon: "success",
                        button: "Okay!",
                    });
                    // Update state with the new comment
                    setAllComments(prevComments => [...prevComments, newComment]);
                }
            })
            .catch(error => console.error("Error adding comment:", error));
    };

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
                        <Link to={`/updatedBlog/${blog._id}`}>
                        {isBlogAuthor && <button className="btn btn-wide btn-primary">Update Blog</button>}
                        </Link>

                    </div>
                </div>
            </div>

            <div className="mx-20 space-y-4">
                {!isBlogAuthor && ( // Render comment section if the current user is not the author
                    <form onSubmit={handleAddComment}>
                        <p className="font-bold text-xl"> Please comment here. </p>
                        <textarea placeholder="Comment here" name="comment" className="textarea textarea-bordered textarea-sm w-full"></textarea>
                        <input type="submit" value="Add Comment" className="btn btn-block bg-[#D2B48C]" />
                    </form>
                )}
                {isBlogAuthor && ( // Render message if the current user is the author
                    <p>Can not comment on own blog</p>
                )}
            </div>

            <div className="overflow-x-auto mx-20 space-y-4">
            <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Profile Pic</th>
                            <th>User Name</th>
                            <th>Comment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {allComments.map(comments => (
                            <tr key={comments._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={comments.userProfilePic} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{comments.userName}</td>
                                <td>{comments.comment}</td>


                            </tr>
                        ))}



                    </tbody>




                </table>
            </div>
        </div>
    );
};

export default BlogDetails;
