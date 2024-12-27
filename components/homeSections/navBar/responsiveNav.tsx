"use client";

/**
 * ResponsiveNav Component
 * 
 * This component creates for changing visibility of Mobile and normal nav bars according to the screen sizes.
 */

import React, { useState } from 'react'
import MobileNav from './mobileNav';
import NavBar from './navBar';

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false); // variable for show/hide mobile nav bar
    const handleNavShow = () => setShowNav(true)
    const handleCloseNav = () => setShowNav(false);

  return (
    <>
        <NavBar openNav={handleNavShow} />
        <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </>
  )
}

export default ResponsiveNav