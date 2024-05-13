
import { useState } from "react";
import { motion } from "framer-motion";
import UseTitle from "../Title/UseTitle";
import Banner from "./Banner/Banner";
import RecentBlog from "./RecentBlog/RecentBlog";
import NewsLetter from "./NewsLetter/NewsLetter";
import Statistics from "./Statistics/Statistics";
import ReaderQuestion from "./ReaderQuestion/ReaderQuestion";

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

            <div className="absolute top-24 md:top-12 left-16 md:left-[350px]">
                <button
                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full focus:outline-none"
                    onClick={toggleTheme}
                >
                    {isDarkTheme ? "Light" : "Dark"} Theme
                </button>
            </div>
        </div>
    );
};

export default Home;
