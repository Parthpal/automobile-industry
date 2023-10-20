import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandDetails from './BrandDetails';

const Brands = () => {
    // const brandDetails = useLoaderData();
    const [brandNames,setBrandNames]=useState([]);
    fetch('https://ph-automotive-server.vercel.app/brands')
    .then(res=>res.json())
    .then(data=>setBrandNames(data))
    return (<>
       <div className='mx-auto'>
        <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/bQHNXvP/auto-mobile-logo.png" alt="Shoes" className="rounded-xl mx-auto w-20 h-20" />
        </figure>
        <h2 className="text-center text-4xl font-bold text-[#2196C4]">OUR BRANDS</h2>
        </div>
        
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10'>
                {
                    brandNames.map(bName=><BrandDetails bName={bName} ></BrandDetails>)
                }
            </div>

        </> );
};

export default Brands;