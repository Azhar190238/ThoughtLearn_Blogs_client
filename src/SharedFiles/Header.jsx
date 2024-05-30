

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Tooltip } from 'react-tooltip'
import { authContext } from "../Components/Providers/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(authContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    }

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allBlog'> All Blogs</NavLink></li>
            <li><NavLink to='/featureBlog'> Featured Blogs </NavLink></li>
            {user && (
                <>
                    <li><NavLink to='/addBlog'> Add Blogs</NavLink></li>
                    <li><NavLink to='/wishlist'> Wishlist</NavLink></li>
                    <li><NavLink to='/subscriber'>Subscriber List</NavLink></li>
                    <li><NavLink to='/about'>About Me</NavLink></li>
                    
 
                    
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <div className="flex items-center space-x-1 md:space-x-2">
                            <img className="w-10 rounded-xl" src="https://i.postimg.cc/DZ6Z0phG/logo.png" alt="" />
                            <a className="text-md md:text-3xl">Th<span className="text-red-500">ou</span>ght<span className="text-red-500">Le</span>arn</a>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {user ? (
                    <div className="navbar-end gap-1 md:gap-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className=" rounded-full relative">
                                    <div className="w-10">
                                        <img
                                            alt="User Avatar"
                                            src={user.photoURL || 'https://i.postimg.cc/506PW3dk/user.png'}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="absolute top-0 left-0 bg-black bg-opacity-75 text-white text-[9px] px-1 rounded-b opacity-0 hover:opacity-100 transition-opacity">
                                            {user.displayName}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>{user.displayName}</li>
                                <li onClick={handleSignOut}><a>Log Out</a></li>

                            </ul>
                        </div>
                        <button onClick={handleSignOut} className="btn"><a id="clickable" className="btn  my-anchor-element">Log Out</a>
                            <Tooltip anchorSelect="#clickable" clickable>
                                <p className="">Are You sure?</p>
                            </Tooltip></button>
                    </div>
                ) : (
                    <div className="navbar-end gap-3">
                        <img className="w-10 rounded-full" src={'https://i.postimg.cc/506PW3dk/user.png'} alt="User Avatar" />
                        <Link to='/login'> <a className="btn">Login</a></Link>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;





