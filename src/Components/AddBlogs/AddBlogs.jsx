
import Swal from 'sweetalert2';
import UseTitle from '../Title/UseTitle';
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';



const AddBlogs = () => {
    UseTitle("Add Blog");
    const {user} =useContext(authContext);
    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const photo = form.photo.value;
        const newBlog = { 
            name, 
            email,
             title, 
             category,
              short_description, 
              long_description,
               photo,
               userName: user?.displayName,
               userProfilePic: user?.photoURL };
        // console.log(newBlog);
        fetch('http://localhost:5000/addBlogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "New Blog added Successfully!",
                        icon: "success",
                        button: "Okay!",
                    });
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleAddBlog} className="bg-[#F4F3F0] mx-5 md:mx-20 lg:mx-40 space-y-3 my-10">
                <h1 className="pt-10 text-center font-sans text-3xl md:text-5xl">Add New Blog</h1>
                <p className="pt-4 text-center px-10 lg:px-40">
                    A blog is a website where individuals or organizations regularly publish content on specific topics, arranged in reverse chronological order. It's a platform for sharing thoughts, ideas, experiences, and information with others online.</p>

                <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>User Name</p>
                        <input type="text" placeholder="User Name (Optional)" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>User Email</p>
                        <input type="email" placeholder="Enter User Email" name="email" className=" input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>Blog Title</p>
                        <input type="text" placeholder="Enter Blog Title" name="title" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Category</p>
                        <select name="category" className="select select-bordered w-full">
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Technology">Technology</option>
                            <option value="Science">Science</option>
                            <option value="Tech">Tech</option>
                        </select>
                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="w-full">
                        <p>Short Description</p>
                        <textarea placeholder="Short Description" name='short_description' className="textarea textarea-bordered textarea-sm w-full" ></textarea>

                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="w-full">
                        <p>Long Description</p>
                        <textarea placeholder="Long Description" name='long_description' className="textarea textarea-bordered textarea-md w-full" ></textarea>

                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="w-full">
                        <p>Photo URL</p>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="mx-20 pb-32 py-10">
                    <input type="submit" value="Add Blog" className="btn btn-block bg-[#D2B48C]" />
                </div>
            </form>
        </div>
    );
};

export default AddBlogs;