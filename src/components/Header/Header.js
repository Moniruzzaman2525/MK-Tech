


import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to='/' class="btn btn-ghost normal-case text-xl text-black">MK TECH</Link>
                </div>
                <div class="flex-none pr-5">
                    <h2><span className='text-success'>BN</span> / EN</h2>
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
                                <li><Link className='text-secondary' to='/'>HOME</Link></li>
                                <li><Link className='text-secondary' to='/'>ADVERTISERS</Link></li>
                                <li><Link className='text-secondary' to='/'>PUBLISHERS</Link></li>
                                <li><Link className='text-secondary' to='/'>INFLUENCERS</Link></li>
                                <li><Link className='text-secondary' to='/'>AD FORMATS</Link></li>
                                <li><Link className='text-secondary' to='/'>BLOG</Link></li>
                                <li><Link className='text-secondary' to='/'>CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-start hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><CustomLink className="px-4 py-2 rounded text-secondary" to='/'>HOME</CustomLink></li>
                            <li><CustomLink className="px-4 py-2 rounded text-secondary" to='/advertisers'>ADVERTISERS</CustomLink></li>
                            <li><CustomLink className="px-4 py-2 rounded text-secondary" to='/publishers'>PUBLISHERS</CustomLink></li>
                            <li><CustomLink className="px-4 py-2 rounded text-secondary" to='/influencers'>INFLUENCERS</CustomLink></li>
                            <li><CustomLink className='whitespace-nowrap px-4 py-2 rounded text-secondary' to='/adRmats'>AD FORMATS</CustomLink></li>
                            <li><CustomLink className="px-4 py-2 rounded text-secondary" to='/blog'>BLOG</CustomLink></li>
                            <li><CustomLink className='whitespace-nowrap px-4 py-2 rounded text-secondary' to='/contact'>CONTACT US</CustomLink></li>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <div className='rounded-full shadow-lg px-5 md:px-10 flex py-1'>
                            <CustomLink className="rounded px-3 text-secondary py-1" to="/login"><button class="btn-xs uppercase">Login</button></CustomLink>
                            <CustomLink className="rounded px-3 text-secondary py-1" to='/signup'><button class="btn-xs  uppercase">Sign Up</button></CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;