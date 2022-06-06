


import React from 'react';

const Slider = () => {
    return (
        <div className='hidden md:block'>
            <h2 className='text-2xl text-secondary font-bold text-center'>Our Happy Client</h2>
            <div className="carousel mx-10">
                <div id="slide1" className="carousel-item gap-5  relative w-full">
                    <div>
                        <div className='md:flex items-center mx-auto'>
                            <div className='flex-1'>
                                <img className='w-2/4 mb-10  mt-10 mx-auto' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1654531788~exp=1654532388~hmac=89757cd47fa69571eb4d655782561bef9b84872948647eb9a0f68cacfa660885" alt="" />
                            </div>
                            <div className='flex-1 text-justify  mt-10'>
                                <h2 className='text-2xl font-bold  text-center text-neutral'>Mr. Mack Hasan</h2>
                                <h2 className='text-xl text-center font-extrabold'>Nice Work For This Website!!</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex items-center mx-auto'>
                            <div className='flex-1'>
                                <img className='w-2/4 mb-10  mt-10 mx-auto' src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?w=740" alt="" />
                            </div>
                            <div className='order-2 text-justify  mt-10'>
                                <h2 className='text-2xl font-bold  text-center text-neutral'>Md. Shanto</h2>
                                <h2 className='text-xl text-center font-extrabold'>Awasome PlatFrom</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
                <div id="slide2" className="carousel-item gap-5 relative w-full">
                    <div>
                        <div className='md:flex items-center mx-auto'>
                            <div className='flex-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://img.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg?w=900&t=st=1654531856~exp=1654532456~hmac=ac5da78f399e439e6a25a3878ab1b1169ba4462609a3b59bde600c1901ec34ef" alt="" />
                            </div>
                            <div className='flex-1 text-justify  mt-10'>
                                <h2 className='text-2xl font-bold  text-center text-neutral'>Mr. Jahid Khan</h2>
                                <h2 className='text-xl text-center font-extrabold'>Good Work</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex items-center mx-auto'>
                            <div className='flex-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://img.freepik.com/free-photo/ukraine-russian-conflict-cute-young-guy-green-shirt-holding-ukrainian-heart-giving-heart_140725-163607.jpg?w=900&t=st=1654531968~exp=1654532568~hmac=900982ef0089d1fa4c391ad1e1b2ae822be19d1ea6691da9d7e6355f5ba38d24" alt="" />
                            </div>
                            <div className=' flex-1 text-justify  mt-10'>
                                <h2 className='text2-x font-boldl text-center text-neutral'>Mr. Imran Hossen</h2>
                                <h2 className='text-xl font-extrabold text-center'>Nice Collection</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;