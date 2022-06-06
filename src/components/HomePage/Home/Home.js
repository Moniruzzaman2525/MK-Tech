

import React from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import Services from '../Serivces/Services';

const Home = () => {
    return (
        <div>
            <div class="hero my-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-photo/independence-day-composition-with-festive-elements_23-2148959469.jpg?w=1060&t=st=1654497340~exp=1654497940~hmac=314fe244c8222615597f0cc1b1e52c2cf1db15aeaa4da041e34e9a80dc967637" class=" md:max-w-lg mx-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Welcome To MK TECH!</h1>
                        <p class="py-6">MK Tech is small, woman-owned company created in 2011 to build complete web solutions for a variety of government and commercial customers. We specialize in full-stack development to include the hosting as well as the architecture design and implementation. Our current events include</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;