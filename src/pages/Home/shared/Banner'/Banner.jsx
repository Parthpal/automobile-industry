import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/gjZjLJS/banner-2.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            
            <h1 className="mb-5 text-5xl font-bold text-[#D2583E]">Innovation in Motion</h1>
            <p className="mb-5 text-white font-semibold">Embracing the spirit of progress, our tagline 'Driving Tomorrow: Innovation in Motion' encapsulates the automotive industry's commitment to pushing boundaries and shaping a future</p>
            <button className="btn btn-primary border-0 text-white bg-[#2195C4]">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;