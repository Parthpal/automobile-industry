import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider/AuthProvider';

const Header = ({handleSwitch}) => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
      logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error mssge
      });
    }
  
    const links=<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/addProduct">Add Product</Link></li>
    <li><Link to="/addToCart">My Cart</Link></li>
    <li><Link to="/login">Login</Link></li>
</>
    return (
        <div className="navbar dark:bg-black dark:text-white bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <img className='w-16 h-14' src="https://i.ibb.co/bQHNXvP/auto-mobile-logo.png" alt="" srcset="" />
                <a className="normal-case text-xl font-semibold hidden md:block">PH Automotive LTD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
            
            {
                
        user ?<>
           <p className='mx-2'>{user.displayName}</p>
           
          <div>
              <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block mx-2"  src={user.photoURL} />
          </div>
            
        <button className='btn' onClick={handleLogout}>Logout</button>
        </>:
        <Link to="/login">Login</Link>
      }
      <button className='btn btn-outline dark:text-white ml-2 px-4 py-1 hidden md:block' onClick={handleSwitch}>Dark Mode</button>
            </div>
        </div>
    );
};

export default Header;