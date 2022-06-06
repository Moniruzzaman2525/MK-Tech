


import React from 'react';

const Slider = () => {
    return (
        <div className='hidden md:block'>
            <div className="carousel mx-10">
                <div id="slide1" className="carousel-item gap-5  relative w-full">
                    <div>
                        <div className='md:flex items-center bg-black mx-auto'>
                            <div className='order-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-2.png" alt="" />
                            </div>
                            <div className='order-1 text-justify text-white mt-10'>
                                <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                                <h2 className='text-2xl md:text-6xl text-center font-extrabold'>WHEELES $ FIRES <br />COLLECTION</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex bg-black items-center mx-auto'>
                            <div className='order-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-1.png" alt="" />
                            </div>
                            <div className='order-2 text-justify text-white mt-10'>
                                <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                                <h2 className='text-2xl md:text-6xl text-center font-extrabold'>WHEELES $ FIRES <br />COLLECTION</h2>
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
                        <div className='md:flex bg-black items-center mx-auto'>
                            <div className='order-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-2.png" alt="" />
                            </div>
                            <div className='order-1 text-justify text-white mt-10'>
                                <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                                <h2 className='text-2xl md:text-6xl text-center font-extrabold'>WHEELES $ FIRES <br />COLLECTION</h2>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex bg-black items-center mx-auto'>
                            <div className='order-1'>
                                <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-1.png" alt="" />
                            </div>
                            <div className=' order-1 text-justify text-white mt-10'>
                                <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                                <h2 className='text-2xl md:text-5xl font-extrabold text-center'>WHEELES & FIRES<br />COLLECTION</h2>
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