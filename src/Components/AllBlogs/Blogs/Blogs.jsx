
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authContext } from '../../Providers/AuthProvider';

const Blogs = ({ blog}) => {
    const { _id, photo, title, category, short_description } = blog;
    const [loading, setLoading] = useState(true);
    const {user} = useContext(authContext);
    // console.log("CurrentUserMail ",user?.email);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const addToWishlist = async () => {
        try {
            const response = await fetch(`http://localhost:5000/wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...blog, userEmail: user?.email }) // Include userEmail
            });

            const data = await response.json();
            if (data.insertedId) {
                toast.success("Thank you for adding to the wishlist!");
            } else {
                toast.error('Failed to add to wishlist');
            }
        } catch (error) {
            console.error('Wishlist Error:', error.message);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#4F46E5" loading={loading} size={20} />
            </div>
        );
    }
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
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-secondary" onClick={addToWishlist}>Wishlist</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
    }).isRequired,
    currentUserEmail: PropTypes.string.isRequired, 
};

export default Blogs;


