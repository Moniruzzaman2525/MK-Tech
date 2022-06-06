


import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';

const Skim = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://www.mktechinc.com/assets/new-website.png" class=" max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <div>
                            <h1 class="text-2xl text-primary font-bold">SKIM</h1>
                            <p class="py-6 text-neutral">SKIM" is a link that a publisher inserts on a specific site
                                element, and after clicking on it, an advertisement appears
                                to the user.
                                SKIM gives 100% control of your sold traffic amount, higher
                                CR to advertisers and CPM rates to publishers.</p>

                        </div>
                        <button class="btn btn-ghost btn btn-ghost text-secondary text-lg">Learn more <AiOutlineExport className='ml-2'></AiOutlineExport></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skim;