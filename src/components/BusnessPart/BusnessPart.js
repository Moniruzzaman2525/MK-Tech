

import React from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import { FcLikePlaceholder, FcPaid } from 'react-icons/fc';

const BusnessPart = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-5xl uppercase'>Millions business <span className='text-success'>trust us</span></h2>
            <p className='text-center text-xl uppercase mt-3'>try to understand users expectation</p>
            <div className='grid md:grid-cols-3 my-20'>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><FcLikePlaceholder></FcLikePlaceholder></h2>
                    <h2 className='text-5xl mb-2'>1 BN+</h2>
                    <h3>Daily Impressions</h3>
                </div>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><FcPaid></FcPaid></h2>
                    <h2 className='text-5xl mb-2'>52k+</h2>

                </div>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><RiGlobalLine></RiGlobalLine></h2>
                    <h2 className='text-5xl mb-2'>65k+</h2>

                </div>
            </div>
        </div>
    );
};

export default BusnessPart;