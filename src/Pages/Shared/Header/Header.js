import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { Authcontex } from '../../../Context/Context';

const Header = () => {
    const { user,logout } = useContext(Authcontex)

    const handlelogout=()=>{
        logout();
    }

    const menuitems = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="/about">About</Link></li>
        <li className='font-semibold'><Link to="/services">Services</Link></li>
        <li className='font-semibold'><Link to="/products">Products</Link></li>
        <li className='font-semibold'><Link to="/contact">Contact</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to="/orders">Orders</Link></li>
                    <li className='font-semibold'><Link onClick={handlelogout} to="/login">Logout</Link></li>

                </>
                :
                <>
                    <li className='font-semibold'><Link to="/login">LogIn</Link></li>
                    <li className='font-semibold'><Link to="/registration">Registration</Link></li>
                </>
        }


    </>

    return (
        <div>
            <div className="navbar h-20 mb-8 mt-4 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuitems}
                        </ul>
                    </div>
                    <img src={logo}></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuitems}
                    </ul>
                </div>
                <div className="navbar-end">

                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
            </div>
        </div>
    );
};

export default Header;