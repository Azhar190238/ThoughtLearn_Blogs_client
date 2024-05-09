import { Link } from "react-router-dom";
import UseTitle from "../Title/UseTitle";


const About = () => {
  UseTitle("About");
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.postimg.cc/jqZMCDNL/PXL-20230929-160224583.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">I am Azharuddin</h1>
      <p className="py-6">I am a passionate and driven Computer Science and Engineering student with a keen interest in exploring the world of technology and innovation. I am fascinated by the power of coding and its ability to create solutions that can positively impact society. My goal is to leverage my skills and knowledge to contribute to the field of technology and make a difference in the world.</p>
      <Link to='/'> <button className="btn btn-primary">Thanks To Read And go back to home </button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default About;