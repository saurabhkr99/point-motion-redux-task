import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex flex-row items-center justify-evenly h-20 w-full overflow-hidden'
            // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
        >
            <NavLink to='/' className='text-3xl text-black font-black font-mono'>
                Home
            </NavLink>
            <NavLink to='/manageproducts' className='text-3xl text-black font-black font-mono'>
                Manage Products
            </NavLink>
        </nav>
    )
}

export default Header;