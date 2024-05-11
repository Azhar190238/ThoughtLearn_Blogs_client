import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';

const Blogs = ({ blog }) => {
    const { _id, photo, title, category, short_description } = blog;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#4F46E5" loading={loading} size={20} />
            </div>
        );
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl flex flex-col  space-y-4">
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
                    <Link to={`/allBlog/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    <Link to={`/wishlist/${_id}`}><button className="btn btn-secondary">Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
    
};

Blogs.propTypes = {
    tourist: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        spot_name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        visitors_per_year: PropTypes.number.isRequired,
    }).isRequired,
};

export default Blogs;