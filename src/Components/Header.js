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
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar">

                        <div class="flex-1 px-2 mx-2">
                            <Link to="/home">Halda Screwdriver </Link>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li> <NavLink to="/about">About</NavLink></li>
                                <li>  <NavLink to="/contact">Contact</NavLink></li>
                                <li>   {
                                    user ? <>
                                        <NavLink to="/dashboard">DashBoard</NavLink>
                                        <button onClick={() => {
                                            signOut(auth);
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
                <div class="drawer-side ">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-main">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li> <NavLink to="/about">About</NavLink></li>

                        <li>  <NavLink to="/contact">Contact</NavLink></li>
                        <li>   {
                            user ? <>
                                <NavLink to="/dashboard">DashBoard</NavLink>
                                <button onClick={() => {
                                    signOut(auth);
                                }}>Log out</button>
                            </> : <>

                                <NavLink to="/signIn">Sign In</NavLink>
                                <NavLink to="/signUp">Sign Up</NavLink></>
                        }</li>

                    </ul>

                    {/* <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;