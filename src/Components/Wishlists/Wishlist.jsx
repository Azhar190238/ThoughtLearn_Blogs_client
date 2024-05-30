/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = ({ wishlist, wishlists, setWishlists  }) => {
    // eslint-disable-next-line react/prop-types
    const {_id, photo, title, category, short_description ,blogId } = wishlist;
//  console.log(wishlist);
    const handleDelete = _id => {
        // console.log('Deleting item with ID:', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            //   console.log(result);
                fetch(`http://localhost:5000/wishlist/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => {
                    // console.log('Response:', res);
                    return res.json();
                })
                .then(data => {
                    // console.log('Delete response data:', data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Blog has been deleted.",
                            icon: "success"
                        });
                        // Remove the deleted item from the wishlists array
                        // eslint-disable-next-line react/prop-types
                        const remaining = wishlists.filter(item => item._id !== _id);
                        setWishlists(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting item from wishlist:', error);
                    // Optionally, handle error (e.g., show an error message)
                });
            }
        });
    };
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl flex flex-col space-y-4">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-col justify-between space-y-4">
                <div>
                    <h2 className="card-title text-center ">{title}</h2>
                    <h2 className='text-lg mt-3'> <span className="font-bold ">Category: </span> {category}</h2>
                    <div className="flex mt-3 ">
                        <p className="w-full"><span className="text-lg font-bold ">Short Description: </span>{short_description}</p>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <Link to={`/details/${blogId}`}><button className="btn btn-primary">View Details</button></Link>
                    <button onClick={ () => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
