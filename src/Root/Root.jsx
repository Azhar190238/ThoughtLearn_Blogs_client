import { Outlet } from "react-router-dom";
import Footer from "../SharedFiles/Footer";
import Header from "../SharedFiles/Header";


const Root = () => {
    return (

        <div className="mx-5 my-8">
            <div className=" md:10 lg:mx-20">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;