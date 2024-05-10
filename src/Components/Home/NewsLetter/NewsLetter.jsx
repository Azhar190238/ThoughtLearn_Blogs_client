

const NewsLetter = () => {
    return (
        <div>
            <section className=" bg-opacity-10 bg-red-500 mt-20 mb-20 text-center rounded-2xl">
            <div className=" py-20">
                <img className="mx-auto" src="https://i.postimg.cc/05JXPFqM/Group-61.png" alt="" />
                <h1 className=" text-black font-merriweather text-4xl">Subscribe Newsletter</h1>
                <p className="section7-details px-20 text-gray-600 font-inter text-lg pt-3">Thank You For Subscribing message is a great way <br /> to welcome a new subscriber. Here are some networks  who have created the perfect welcome message..</p>
                <br />
                <div className="flex justify-center">
                    <form >
                        <div className=" rounded-full bg-white shadow-xl">
                            <input className=" text-black text-lg px-24 py-3 focus:outline-none" type="text" placeholder="azhar73397@gmail.com" />
                            <button className=" py-6 px-12 rounded-r-full bg-red-600 text-white font-inter font-semibold focus:outline-none" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </div>
    );
};

export default NewsLetter;
