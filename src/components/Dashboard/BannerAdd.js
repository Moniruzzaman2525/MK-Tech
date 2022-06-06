


import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';

const BannerAdd = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-photo/statue-liberty-with-cloudy-beautiful-sky_181624-1112.jpg?w=900&t=st=1654532873~exp=1654533473~hmac=11b124e4a12f8721e27f6fa2afd0ff2f60220767413ca146d379013ef260de3d" class=" max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <div>
                            <h1 class="text-2xl font-bold text-primary">BANNER AD</h1>
                            <p class="py-6 text-neutral">Choose between the available banner formats. Highly
                                effective ad for visibility. Choose between the banner</p>

                        </div>
                        <button class="btn btn-ghost text-secondary text-lg">Learn more <AiOutlineExport className='ml-2'></AiOutlineExport></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAdd;