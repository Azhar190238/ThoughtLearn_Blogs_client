
import { useState } from "react";
import { motion } from "framer-motion";
import UseTitle from "../Title/UseTitle";
import Banner from "./Banner/Banner";
import RecentBlog from "./RecentBlog/RecentBlog";
import NewsLetter from "./NewsLetter/NewsLetter";
import Statistics from "./Statistics/Statistics";
import ReaderQuestion from "./ReaderQuestion/ReaderQuestion";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
    UseTitle("Home");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={` ${isDarkTheme ? "bg-gray-700 text-gray-400" : "bg-white"} min-h-screen transition-colors duration-500`}>
            <Banner></Banner>
            <div>
                <h1 className="text-5xl text-center p-10">Recent Blogs Are Showing Here</h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} transition={{ duration: 10 }}>
                <RecentBlog></RecentBlog>
            </motion.div>
            <NewsLetter></NewsLetter>
            <Statistics></Statistics>
            <ReaderQuestion></ReaderQuestion>

            <div className="absolute top-14 md:top-11  md:left-[370px]">
                <button
                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-1 md:px-4 py-1 rounded-full focus:outline-none"
                    onClick={toggleTheme}
                >
                    {isDarkTheme ? <MdOutlineLightMode className="md:text-3xl" /> : <MdDarkMode className="md:text-3xl" />}
                </button>
            </div>
        </div>
    );
};

export default Home;
