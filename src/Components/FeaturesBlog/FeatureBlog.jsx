import { useLoaderData } from "react-router-dom";


const FeatureBlog = () => {
    const featureBlogs = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <div>
        
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="md:text-xl">
                        <th>Seial Number</th>
                        <th>Blog Title</th>
                        <th>Blog Owner</th>
                        <th>Owner Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {featureBlogs.map(blog =>
                        <tr
                            key={blog._id}>
                            <td>
                                <div className="flex items-center md:gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={blog.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {blog.title}

                            </td>
                            <td>
                                {blog.name}

                            </td>

                        </tr>
                    )


                    }

                </tbody>



            </table>
        </div>
    );
};

export default FeatureBlog;