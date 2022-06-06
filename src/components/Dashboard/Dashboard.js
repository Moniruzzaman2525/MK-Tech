


import React, { useState } from 'react';
import BannerAdd from './BannerAdd';
import Native from './Native';
import './Dashboard.css'
import Skim from './Skim';
import { AiOutlineExport } from 'react-icons/ai';

const Dashboard = () => {
    const [aboutFilter, setAboutFilter] = useState('POPUNDER')
    return (
        <div className='my-20'>
            <div>

                <div className="flex  justify-around">
                    <button className={`rounded-full shadow-lg px-5 md:px-12 py-1 ${aboutFilter === 'POPUNDER' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('POPUNDER')}>POP-UNDER</button>
                    <button className={`rounded-full shadow-lg px-5 md:px-12 py-1 ${aboutFilter === 'BANNER' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('BANNER')}>BANNER AD</button>
                    <button className={`rounded-full shadow-lg px-5 md:px-12 py-1 ${aboutFilter === 'NATIVE' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('NATIVE')}>NATIVE</button>
                    <button className={`rounded-full shadow-lg px-5 md:px-12 py-1 ${aboutFilter === 'SKIM' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('SKIM')}>SKIM</button>
                </div>

            </div>
            <div>
                {
                    aboutFilter === 'POPUNDER' && <div>

                        <div class="hero py-20">
                            <div class="hero-content flex-col lg:flex-row">
                                <div className='flex-1'>
                                    <img src="https://www.mktechinc.com/assets/new-website.png" class=" max-w-sm rounded-lg shadow-2xl" />
                                </div>
                                <div className='flex-1'>
                                    <div>
                                        <h1 class="text-5xl font-bold">POP-UNDER</h1>
                                        <p class="py-6">This is one of the most popular ads. After user’s click, this
                                            ad opens landing page in behind. So, the user experience is
                                            not hampered much.</p>

                                    </div>
                                    <button class="btn btn-ghost">Learn more <AiOutlineExport className='ml-2'></AiOutlineExport></button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    aboutFilter === 'BANNER' && <BannerAdd></BannerAdd>
                }
                {
                    aboutFilter === 'NATIVE' && <Native></Native>
                }
                {
                    aboutFilter === 'SKIM' && <Skim></Skim>
                }
            </div>
        </div >
    );
};

export default Dashboard;