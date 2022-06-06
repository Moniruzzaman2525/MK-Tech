


import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';

const Native = () => {
    return (
        <div>
            <div class="hero py-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-psd/amazing-american-football-ball-3d-illustration_1419-2682.jpg?size=338&ext=jpg&ga=GA1.2.2090978668.1652901003" class=" max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <div>
                            <h1 class="text-2xl text-primary font-bold">NATIVE</h1>
                            <p class="py-6 text-neutral">Ad format with the image and the title, that perfectly fits into
                                the content of the site.
                                Native ads are placed in the most visible areas of the page
                                and, thus, this format shows good results and the level of
                                interaction.</p>

                        </div>
                        <button class="btn btn-ghost text-secondary text-lg">Learn more <AiOutlineExport className='ml-2'></AiOutlineExport></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Native;