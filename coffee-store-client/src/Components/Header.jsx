import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
    // const { user, signOutUser } = use(AuthContext);
    // console.log(userInfo);
    const links = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/addcoffee'}>Add Coffee</NavLink></li>
            <li><NavLink to={'/users'}>Users</NavLink></li>
            <li><NavLink to={'/signin'}>Login</NavLink></li>
            <li><NavLink to={'/signup'}>Register</NavLink></li>
            {/* {
                user &&
                <>
                    <li><NavLink to={'/orders'}>Orders</NavLink></li>
                    <li><NavLink to={'/profile'}>Profile</NavLink></li>
                </>
            } */}

        </>
    );


    // const handleSignOut = () => {
    //     signOutUser()
    //         .then(() => {
    //             console.log('Sign Out Successful');
    //         })
    //         .catch(error => {
    //             alert(error);
    //         })
    // }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Coffee Store</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">{links}</ul>
                </div>
                <div className="navbar-end">

                    {/* {
                        user ?
                            <>
                                <button onClick={handleSignOut} className='btn btn-success btn-soft'>SignOut</button>
                            </>
                            : <Link to={'/login'}><button className="btn btn-success btn-soft">Login</button></Link>
                    } */}


                </div>
            </div>
        </div>
    );
};

export default Header;