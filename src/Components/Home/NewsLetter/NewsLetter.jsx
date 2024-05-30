

// const NewsLetter = () => {
//     return (
//         <div>
//             <section className=" bg-opacity-10 bg-red-500 mt-20 mb-20 text-center rounded-2xl">
//             <div className=" py-20">
//                 <img className="mx-auto" src="https://i.postimg.cc/05JXPFqM/Group-61.png" alt="" />
//                 <h1 className=" text-black font-merriweather text-4xl">Subscribe Newsletter</h1>
//                 <p className="section7-details px-20 text-gray-600 font-inter text-lg pt-3">Thank You For Subscribing message is a great way <br /> to welcome a new subscriber. Here are some networks  who have created the perfect welcome message..</p>
//                 <br />
//                 <div className="flex justify-center">
//                     <form >
//                         <div className=" rounded-full bg-white shadow-xl">
//                             <input className=" text-black text-lg px-24 py-3 focus:outline-none"
  //                           type="email" placeholder="azhar73397@gmail.com" name="email" />
//                             <button className=" py-6 px-12 rounded-r-full bg-red-600 text-white font-inter font-semibold focus:outline-none" type="button">Subscribe</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//         </div>
//     );
// };

// export default NewsLetter;




import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authContext } from '../../Providers/AuthProvider';

const NewsLetter = () => {
    const {user}= useContext(authContext)

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const newSubscriber ={
            email,
            userName: user?.displayName,
            userProfilePic: user?.photoURL
        }
        console.log('New Subscriber',newSubscriber)

        try {
            const response = await fetch('http://localhost:5000/subscriber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSubscriber)
            });

            const data = await response.json();
            // console.log(data);
            if (data.insertedId) {
                toast.success("Thank you for subscribing to our newsletter!");
            } else {
                throw new Error('Failed to subscribe');
            }
        } 
        catch (error) {
            console.error('Subscription Error:', error.message);
        }
      
    };

    return (
        <div>
            <section className="bg-opacity-10 bg-red-500 mt-20 mb-20 text-center rounded-2xl">
                <div className="py-20">
                    <img className="mx-auto" src="https://i.postimg.cc/05JXPFqM/Group-61.png" alt="" />
                    <h1 className="text-black font-merriweather text-4xl">Subscribe Newsletter</h1>
                    <p className="section7-details px-2 md:px-20 text-gray-600 font-inter text-lg pt-3">Thank You For Subscribing message is a great way <br /> to welcome a new subscriber. Here are some networks  who have created the perfect welcome message..</p>
                    <br />
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit}>
                            <div className="rounded-full bg-white shadow-xl flex">
                                <input 
                                    className="text-black text-lg px-2 md:px-24 py-3 focus:outline-none rounded-full" 
                                    type="email" 
                                    placeholder="azhar73397@gmail.com" 
                                    name="email"
                                />
                                <button 
                                    className="py-6 px-12 rounded-r-full bg-red-600 text-white font-inter font-semibold focus:outline-none" 
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer /> {/* Place the ToastContainer component outside the section */}
        </div>
    );
};

export default NewsLetter;


