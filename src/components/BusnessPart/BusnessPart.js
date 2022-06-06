

import React from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import { FcLikePlaceholder, FcPaid } from 'react-icons/fc';

const BusnessPart = () => {
    return (
        <div className='my-20 bg-secondary py-20'>
            <div className='grid md:grid-cols-3 my-20'>
                <div className='mx-auto mb-10 rounded-full p-16 px-16 border-dashed border'>
                    <h2 className='text-7xl ml-7 mb-2 text-white'><FcLikePlaceholder className='text-accent '></FcLikePlaceholder></h2>
                    <h2 className='text-5xl mb-2 text-accent'>1 BN+</h2>
                    <h3 className='text-accent text-xl'>Daily Impressions</h3>
                </div>
                <div className='mx-auto mb-10 rounded-full p-16 px-16 bg-white'>
                    <h2 className='text-7xl ml-10 mb-2'><FcPaid></FcPaid></h2>
                    <h2 className='text-5xl ml-5 mb-2 text-secondary'>52k+</h2>
                    <h3 className='text-xl text-secondary'>Daily Impressions</h3>
                </div>
                <div className='mx-auto mb-10 rounded-full p-16 px-16 bg-primary'>
                    <h2 className='text-7xl ml-10 text-accent mb-2'><RiGlobalLine></RiGlobalLine></h2>
                    <h2 className='text-5xl mb-2 ml-5 text-accent'>65k+</h2>
                    <h3 className='text-accent text-xl'>Daily Impressions</h3>
                </div>
            </div>
        </div>
    );
};

export default BusnessPart;