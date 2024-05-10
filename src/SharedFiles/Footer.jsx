

const Footer = () => {
   
        return (
            <div className="mt-10 ">
                <footer className="footer py-10 lg:py-32 px-10 lg:px-24 bg-neutral text-neutral-content rounded-xl">
                    <nav className="space-y-2 mx-auto lg:mx-0">
                    <div className="flex items-center space-x-2">
                            <img className="w-10 rounded-xl" src="https://i.postimg.cc/DZ6Z0phG/logo.png" alt="" />
                            <a className="text-xl md:text-3xl">Th<span className="text-red-500">ou</span>ght<span className="text-red-500">Le</span>arn</a>
                        </div>
                        <p className="max-w-80 text-[#FFFFFF99] text-center lg:text-left">Find 27 words that mean to transmit information or requests to someone or something, such as contact, reach, communicate </p>
                        <div className="flex gap-2 mx-auto lg:mx-0">
                            <img src={'https://i.ibb.co/X2WnJ3F/Frame.png'} alt=""/>
                            <a className="link link-hover text-[#FFFFFF99]">azhar73397@gmail.com</a>
                        </div>
                        <div className="flex gap-2 mx-auto lg:mx-0">
                            <img src={'https://i.ibb.co/SsYgTTw/Frame-1.png'} alt=""/>
                            <a className="link link-hover text-[#FFFFFF99]">(+62)123-321-543</a>
                        </div>
                    </nav>
                    <div className="footer flex flex-row gap-10 lg:gap-40">
                        <nav className="space-y-1 mx-auto lg:mx-0">
                            <header className="text-2xl font-extrabold mx-auto lg:mx-0">Company</header>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">About us</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Leadership</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Careers</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">News & Article</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Legal Rules</a>
                        </nav>
                        <nav className="space-y-1 mx-auto">
                            <header className="text-2xl font-extrabold mx-auto lg:mx-0">Support</header>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Help Center</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">FAQ</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Tourist Spot Support</a>
                            <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Contact us</a>
                        </nav>
                    </div>
                    <nav className="space-y-1 mx-auto">
                        <header className="text-2xl font-extrabold mx-auto lg:mx-0">Services</header>
                        <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Tourist Guid</a>
                        <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Group Guid</a>
                        <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Private Guid</a>
                        <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Guid for kids</a>
                        <a className="link link-hover text-[#FFFFFF99] mx-auto lg:mx-0">Guid for Adult</a>
                    </nav>
                </footer>
            </div>
        );

};

export default Footer;