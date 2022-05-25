import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../fierbase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-44 ">
                    {/* <!-- Sidebar content here --> */}
                    {/* <Outlet></Outlet> */}
                    <li><NavLink to="/dashboard">My Profile</NavLink></li>
                    {
                        !admin && <>
                            <li><NavLink to="/dashboard/myreview">My Review</NavLink></li>
                            <li> <NavLink to="/dashboard/myorder">My Order</NavLink></li>
                        </>
                    }

                    {/* <li><NavLink to="/dashboard/myreview">My Review</NavLink></li>
                    <li> <NavLink to="/dashboard/myorder">My Order</NavLink></li> */}
                    {admin && <>
                        <li> <NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
                        <li> <NavLink to="/dashboard/allorder">All Orders</NavLink></li>
                        <li> <NavLink to="/dashboard/allusers">All Users</NavLink></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;