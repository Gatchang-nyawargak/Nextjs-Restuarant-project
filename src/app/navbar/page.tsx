import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="text-Black  top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-serif italic text-amber-500 hover:text-amber-400 transition duration-300">Food House</span>
        </Link>
        <div className="space-x-20 flex items-center">
          <Link href="/">
            <span className="text-lg hover:text-Black transition duration-300 text-amber-400">HOME</span>
          </Link>
          <Link href="/restaurant">
            <span className="text-lg hover:text-amber-400 transition duration-300">RESTAURANT</span>
          </Link>
          <Link href="/services">
            <span className="text-lg hover:text-amber-400 transition duration-300">SERVICES</span>
          </Link>
          <Link href="/cart">
            <span className="text-lg hover:text-amber-400 transition duration-300">CART</span>
          </Link>
          </div>
          <div>
          <Link href="/signin">
          <span className="text-lg hover:text-amber-400 transition duration-300">Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
