import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';
const Banner = () => {
    return (
        <div className='lg:mx-10'>
        <div className="hero min-h-screen rounded-2xl" style={{ backgroundImage: 'url(https://i.postimg.cc/C5XXcpDk/technology-communication-icons-symbols-concept-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            words={['Welcome To My Blog And Explore It']}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="mb-5">A regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style</p>
                    <button className="btn btn-primary">Get Started to Read </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;







