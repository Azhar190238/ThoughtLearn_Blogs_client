/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useContext } from "react";
import { useTable } from "react-table";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";


const FeatureBlog = () => {
    const featureBlogs = useLoaderData();
    const {user} = useContext(authContext);
    // console.log(user)

    //     // Sort featureBlogs based on the word count of the long_description
    featureBlogs.sort((a, b) => {
        const wordsA = a.long_description.split(' ').length;
        const wordsB = b.long_description.split(' ').length;
        return wordsB - wordsA;
    });



    // Get the first 10 blogs
    const top10Blogs = featureBlogs.slice(0, 10);

    // Define columns and data for react-table
    const columns = React.useMemo(
        () => [
            {
                Header: "Serial Number",
                accessor: (row, index) => index + 1,
            },
            {
                Header: "Blog Title",
                accessor: "title",
            },
            {
                Header: "Blog Owner",
                accessor: "userName",
            },
            {

                Header: "Owner Photo",
                accessor: "userProfilePic",
                Cell: ({ cell }) => (
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                <img
                                    src={cell.row.original.userProfilePic || "https://i.postimg.cc/506PW3dk/user.png"}
                                    alt="Owner Photo"
                                />
                            }
                        </div>
                    </div>
                )
            },


        ],
        []
    );

    const data = React.useMemo(() => top10Blogs, [top10Blogs]);

    // Initialize the react-table instance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="overflow-x-auto">
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default FeatureBlog;












// core work


// // import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// // import { authContext } from "../Providers/AuthProvider";

// const FeatureBlog = () => {
//     const featureBlogs = useLoaderData();
//     // const { user } = useContext(authContext);

//     // Sort featureBlogs based on the word count of the long_description
//     featureBlogs.sort((a, b) => {
//         const wordsA = a.long_description.split(' ').length;
//         const wordsB = b.long_description.split(' ').length;
//         return wordsB - wordsA;
//     });

//     // Get the top 10 blogs based on the word count of the long_description
//     const top10Blogs = featureBlogs.slice(0, 10);

//     return (
//         <div className="overflow-x-auto">
//             <div></div>
//             <table className="table">
//                 {/* head */}
//                 <thead>
//                     <tr className="md:text-xl">
//                         <th>Serial Number</th>
//                         <th>Blog Title</th>
//                         <th>Blog Owner</th>
//                         <th>Owner Photo</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {top10Blogs.map((blog, index) => (
//                         <tr key={blog._id}>
//                             <td>{index + 1}</td>
//                             <td>{blog.title}</td>
//                             <td>{blog.name}</td>
//                             <td>
//                                 <div className="avatar">
//                                     <div className="mask mask-squircle w-12 h-12">
//                                         <img src={blog.userPhoto || 'https://i.postimg.cc/506PW3dk/user.png'} alt="Owner Photo" /> {/* Owner Photo */}
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default  FeatureBlog;