import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-44 ">
                    {/* <!-- Sidebar content here --> */}
                    {/* <Outlet></Outlet> */}
                    <li><NavLink to="/dashboard">My Profile</NavLink></li>
                    <li><NavLink to="/dashboard/myreview">My Review</NavLink></li>
                    <li> <NavLink to="/dashboard/myorder">My Order</NavLink></li>
                    <li> <NavLink to="/dashboard/allusers">All Users</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;