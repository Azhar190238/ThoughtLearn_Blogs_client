
import UseTitle from "../Title/UseTitle";
import Wishlist from "./Wishlist";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";
// import { useParams } from "react-router-dom";


const Wishlists = () => {
    UseTitle("WishList");
    const {user} = useContext(authContext);
    const [wishlists, setWishlists] = useState([]);
  
    useEffect(() => {
        fetch(`http://localhost:5000/wishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("Received data:", data); // Check what data is received
                setWishlists(data);
            })
            .catch(error => console.error("Error fetching data:", error)); // Log any errors
    }, [user]);

    return (
        <div className="lg:mx-20 mt-10">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlists.map(wishlist => (
                    <Wishlist
                     key={wishlist._id}
                     wishlist= {wishlist}
                     setWishlists ={setWishlists}
                     wishlists={wishlists}
                     ></Wishlist>
                ))}
                
            </div>
            </div>
        
            )
};

export default Wishlists;
