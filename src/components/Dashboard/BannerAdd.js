


import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';

const BannerAdd = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://www.mktechinc.com/assets/new-website.png" class=" max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <div>
                            <h1 class="text-5xl font-bold">BANNER AD</h1>
                            <p class="py-6">Choose between the available banner formats. Highly
                                effective ad for visibility. Choose between the banner</p>

                        </div>
                        <button class="btn btn-ghost">Learn more <AiOutlineExport className='ml-2'></AiOutlineExport></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAdd;