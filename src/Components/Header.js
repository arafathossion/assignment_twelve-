import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../fierbase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar">

                        <div className="flex-1 px-2 mx-2">
                            <Link to="/home">Halda Screwdriver </Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li> <NavLink to="/about">About</NavLink></li>
                                <li>  <NavLink to="/contact">Contact</NavLink></li>
                                <li>   {
                                    user ? <>
                                        <NavLink to="/dashboard">DashBoard</NavLink>
                                        <button onClick={() => {
                                            signOut(auth);
                                            localStorage.removeItem('accessToken')
                                        }}>Log out</button>
                                        <p>{user?.displayName}</p>
                                    </> : <>

                                        <NavLink to="/signIn">Sign In</NavLink>
                                        <NavLink to="/signUp">Sign Up</NavLink>

                                    </>

                                }</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-main">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li> <NavLink to="/about">About</NavLink></li>

                        <li>  <NavLink to="/contact">Contact</NavLink></li>
                        <li>   {
                            user ? <>
                                <NavLink to="/dashboard">DashBoard</NavLink>
                                <button onClick={() => {
                                    signOut(auth);
                                    localStorage.removeItem('accessToken')
                                }}>Log out</button>
                            </> : <>

                                <NavLink to="/signIn">Sign In</NavLink>
                                <NavLink to="/signUp">Sign Up</NavLink></>
                        }</li>

                    </ul>

                    {/* <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;