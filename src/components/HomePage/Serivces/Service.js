


import React from 'react';

const Service = ({ service }) => {
    const { name, description, image } = service
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-slate-900">{name}</h2>
                    <p className='text-slate-700'>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;