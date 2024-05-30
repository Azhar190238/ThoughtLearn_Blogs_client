import { useLoaderData } from "react-router-dom";
import UseTitle from "../Title/UseTitle";
import Swal from "sweetalert2";


const UpdatedBlog = () => {
    UseTitle("Updated Blog");
    const blog= useLoaderData() ;
    const { _id, photo, title, category, short_description ,name, email, long_description} = blog;
    const handleUpdatedBlog = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const photo = form.photo.value;
        const userPhoto = form.userPhoto;
        const newBlog = { name, email, title, category, short_description, long_description, photo, userPhoto };
        // console.log(newBlog);

      // Send data to the server side
      fetch(`http://localhost:5000/addBlogs/${_id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newBlog)
      })
      .then(res => res.json())
      .then(data => {
        //    console.log(data);
          if(data.modifiedCount >0){
              Swal.fire({
                  title: "Good job!",
                  text: "Blogs Updated Successfully",
                  icon: "success",
                  button: "Okay!",
                });
          }
      })
   
  };
    return (
        <div>
            <form onSubmit={handleUpdatedBlog} className="bg-[#F4F3F0] mx-5 md:mx-20 lg:mx-40 my-10">
                <h1 className="pt-10 text-center font-sans text-3xl md:text-5xl">Updated Existing Blog</h1>
                <p className="pt-4 text-center px-10 lg:px-40">
                    A blog is a website where individuals or organizations regularly publish content on specific topics, arranged in reverse chronological order. It's a platform for sharing thoughts, ideas, experiences, and information with others online.</p>

                <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>User Name</p>
                        <input type="text" placeholder="User Name (Optional)" name="name" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>User Email</p>
                        <input type="email" placeholder="Enter User Email" name="email" defaultValue={email} className=" input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>Blog Title</p>
                        <input type="text" placeholder="Enter Blog Title" name="title" defaultValue={title} className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Category</p>
                        <select name="category" defaultValue={category} className="select select-bordered w-full">
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
                        <textarea placeholder="Short Description" name='short_description' defaultValue={short_description} className="textarea textarea-bordered textarea-sm w-full" ></textarea>

                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="w-full">
                        <p>Long Description</p>
                        <textarea placeholder="Long Description" name='long_description' defaultValue={long_description} className="textarea textarea-bordered textarea-md w-full" ></textarea>

                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="w-full">
                        <p>Photo URL</p>
                        <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="mx-20 pb-32 py-10">
                    <input type="submit" value="Updated Blog" className="btn btn-block bg-[#D2B48C]" />
                </div>
            </form>
        </div>
    );
};

export default UpdatedBlog;