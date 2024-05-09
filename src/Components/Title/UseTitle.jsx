import { useEffect } from "react";


const UseTitle = (title) => {
    useEffect(()=>{
        document.title=`TourifyHub | ${title}`
    },[])
};

export default UseTitle;