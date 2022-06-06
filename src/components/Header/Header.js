


import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">MK TECH</a>
                </div>
                <div class="flex-none pr-5">
                    <h2>BN / EN</h2>
                </div>
            </div>
            <div className='px-10'>
                <div class="navbar bg-base-100">
                    <div class="navbar-start  md:hidden">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>HOME</Link></li>
                                <li><Link to='/'>ADVERTISERS</Link></li>
                                <li><Link to='/'>PUBLISHERS</Link></li>
                                <li><Link to='/'>INFLUENCERS</Link></li>
                                <li><Link to='/'>AD FORMATS</Link></li>
                                <li><Link to='/'>BLOG</Link></li>
                                <li><Link to='/'>CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-start hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'>ADVERTISERS</Link></li>
                            <li><Link to='/'>PUBLISHERS</Link></li>
                            <li><Link to='/'>INFLUENCERS</Link></li>
                            <li><Link className='whitespace-nowrap' to='/'>AD FORMATS</Link></li>
                            <li><Link to='/'>BLOG</Link></li>
                            <li><Link className='whitespace-nowrap' to='/'>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <div className='rounded-full shadow-lg px-5 md:px-10 flex py-1'>
                            <CustomLink className="rounded px-3 py-1" to="/login"><button class="btn-xs uppercase">Login</button></CustomLink>
                            <CustomLink className="rounded px-3 py-1" to='/signup'><button class="btn-xs  uppercase">Sign Up</button></CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;