"use client"
import React from 'react';
import "../styles/navbar.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <>
<nav className="nav">
	<input id="nav-toggle" type="checkbox" />
	<div class="logo"><img className='nav-logo' src="logo.png" /></div>
	<ul class="links">
		<li><Link href="/"
     className={currentRoute === "/"
       ? "nav-link active"
       : "nav-link"}>
         Home
  </Link></li>
		<li><Link href="/about"
     className={currentRoute === "/about"
       ? "nav-link active"
       : "nav-link"}>
         About Us
  </Link></li>
		<li><a href="/partner-with-us">Partner With Us</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank" class="button"><button className='download-btn'>Download ZET</button></a></li>
	</ul>
	<label for="nav-toggle" class="icon-toggle">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</nav>
    </>
  )
}

export default Navbar