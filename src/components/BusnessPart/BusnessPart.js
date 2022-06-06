

import React from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import { FcLikePlaceholder, FcPaid } from 'react-icons/fc';

const BusnessPart = () => {
    return (
        <div className='my-20 bg-secondary py-20'>
            <div className='grid md:grid-cols-3 my-20'>
                <div className='mx-auto mb-10 rounded-full p-16 px-20 border-dashed border'>
                    <h2 className='text-7xl ml-7 mb-2 text-success'><FcLikePlaceholder></FcLikePlaceholder></h2>
                    <h2 className='text-5xl mb-2'>1 BN+</h2>
                    <h3>Daily Impressions</h3>
                </div>
                <div className='mx-auto mb-10 rounded-full p-16 px-20 bg-white'>
                    <h2 className='text-7xl ml-5 mb-2 text-success'><FcPaid></FcPaid></h2>
                    <h2 className='text-5xl mb-2'>52k+</h2>
                    <h3>Daily Impressions</h3>
                </div>
                <div className='mx-auto mb-10 rounded-full p-16 px-20 bg-primary'>
                    <h2 className='text-7xl ml-7 mb-2 text-success'><RiGlobalLine></RiGlobalLine></h2>
                    <h2 className='text-5xl mb-2'>65k+</h2>
                    <h3>Daily Impressions</h3>
                </div>
            </div>
        </div>
    );
};

export default BusnessPart;