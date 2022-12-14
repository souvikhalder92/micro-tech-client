import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaModx, IconName } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../pages/hooks/useAdmin';
import useSeller from '../../pages/hooks/useSeller';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
   
  
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
   
    const menuItems = <React.Fragment>
    <li className='font-semibold text-xl  text-orange-500 '><Link to="/">Home</Link></li>
    <li className='font-semibold text-xl  text-orange-500 '><Link to="/blog">Blog</Link></li>
    {user?.uid ?
            <>
             
                {
               isAdmin || isSeller  ? 
               <>
              <li className='font-semibold text-xl  text-orange-500 '><Link to="/dashboard/dashboard">Dashboard</Link></li>
               
              </>
              :
              <li className='font-semibold text-xl  text-orange-500 '><Link to="/dashboard">Dashboard</Link></li>
              }
            
                  
                <li className='font-semibold text-xl  text-orange-500 '><button onClick={handleLogOut}>Log out</button></li>
            </>
            : <li className='font-semibold text-xl  text-orange-500 '><Link to="/login">Login</Link></li>
            }
  
 
</React.Fragment>
    return (
        <div className="navbar bg-gray-300 flex justify-between">
        <div className="navbar-start">
            <div className="dropdown">
                <label  tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl lg:text-3xl text-orange-600 font-bold"><FaModx></FaModx> Micro Tech</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
    </div>

    );
};

export default Navbar;