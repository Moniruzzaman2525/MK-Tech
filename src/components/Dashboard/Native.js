


import React from 'react';

const Native = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://www.mktechinc.com/assets/new-website.png" class=" max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 class="text-5xl font-bold">POP-UNDER</h1>
                        <p class="py-6">This is one of the most popular ads. After user’s click, this
                            ad opens landing page in behind. So, the user experience is
                            not hampered much.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Native;