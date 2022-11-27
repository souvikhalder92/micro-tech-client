import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../pages/hooks/useAdmin';
import useSeller from '../pages/hooks/useSeller';

import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

 
   
    
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                { /*bg-base-100*/ }
                <ul className="menu p-4 w-80 text-base-content">
                {
                    !isAdmin && 
                    <>
                        <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/wishlist">Wish List</Link></li>   
                    <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                    <li><Link to="/dashboard/myproducts">My Products</Link></li>
                    </>
                }
                    {
                            isAdmin &&
                            <>
                            <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li><Link to="/dashboard/reporteditem">Reported Item</Link></li>
                           
                            </>
                    }
                 
                        
                

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;