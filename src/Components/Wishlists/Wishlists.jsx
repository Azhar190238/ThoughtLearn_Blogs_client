
import UseTitle from "../Title/UseTitle";
import Wishlist from "./Wishlist";
import { useEffect, useState } from "react";
 


const Wishlists = () => {
    UseTitle("WishList");
    // const{user}= useContext(authContext)
  

    const [wishlists, setWishlists] = useState([]);
  
    useEffect(() => {
        fetch(`http://localhost:5000/wishlist`)
            .then(res => res.json())
            .then(data => {
                console.log("Received data:", data); // Check what data is received
                setWishlists(data);
            })
            .catch(error => console.error("Error fetching data:", error)); // Log any errors
    }, []);

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

