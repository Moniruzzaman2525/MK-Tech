


import React, { useState } from 'react';
import BannerAdd from './BannerAdd';
import Native from './Native';
import './Dashboard.css'
import Skim from './Skim';

const Dashboard = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')
    return (
        <div>
            <div>

                <div className="flex  justify-around">
                    <button className={`btn ${aboutFilter === 'ABOUT' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About me</button>
                    <button className={`about_btns ${aboutFilter === 'BANNER' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('BANNER')}>BANNER AD</button>
                    <button className={`about_btns ${aboutFilter === 'NATIVE' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('NATIVE')}>Award</button>
                    <button className={`about_btns ${aboutFilter === 'SKIM' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('SKIM')}>SKIM</button>
                </div>

            </div>
            <div>
                {
                    aboutFilter === 'ABOUT' && <div className=" d-flex gap-5">
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