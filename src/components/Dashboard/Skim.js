


import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';

const Skim = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-photo/3d-render-cylinder-hat-icon-3d-style-4th-july-concept-design_460848-13466.jpg?w=900&t=st=1654533027~exp=1654533627~hmac=e7a73fc76f943c320911859c1e4e8969a6ce6aa8395ce669114a056a86e98248" class=" max-w-sm rounded-lg shadow-2xl" />
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