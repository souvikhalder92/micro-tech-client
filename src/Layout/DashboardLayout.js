import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../pages/hooks/useAdmin';
import useBuyer from '../pages/hooks/useBuyer';
import useSeller from '../pages/hooks/useSeller';

import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
  
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
  
 
   
    
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
                        isSeller === "Buyer" &&
                           <li><Link to="/dashboard">My Orders</Link></li>
                    }

                 
                            
                {
                            isAdmin &&
                            <>
                            <li><Link to="/dashboard/allusers">All Users</Link></li>
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                           
                            </>
                    }
                       {
                            isSeller === "Seller" &&
                            <>
                  
                            <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                           

                    }
                 
                        
                

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;