import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-cyan-900" smooth to="/#about">
                Home
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink> */}
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-cyan-900" to="/our-mission">
                Our Mission
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-cyan-900" to="/contact">
                Contact Us
            </HashLink>
            {/* <Link className="text-white bg-cyan-600 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link> */}
        </>
    )
}

export default NavLinks;