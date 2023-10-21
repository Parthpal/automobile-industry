import React from 'react';

const About = () => {
    return (
        <div >
            <div className='mx-auto mb-10'>
            <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/bQHNXvP/auto-mobile-logo.png" alt="Shoes" className="rounded-xl mx-auto w-20 h-20" />
            </figure>
            <h2 className="text-center text-4xl font-bold text-[#2196C4]">About PH Automotive</h2>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='mx-10 mt-4'>
                    <h2 className='text-2xl text-[#D2583E] font-bold mb-4'>We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</h2>
                    <p className=' dark:text-white text-justify text-xl font-semibold text-black'>Embracing the spirit of progress, our tagline 'Driving Tomorrow: Innovation in Motion' encapsulates the automotive industry's commitment to pushing boundaries and shaping a future where cutting-edge technology and design converge seamlessly on the open road. It embodies a vision where every drive becomes a journey into innovation, where vehicles don't just move forward but accelerate into a new era of automotive excellence, embodying the fusion of style, sustainability, and state-of-the-art engineering,mbodying the fusion of style, sustainability, and state-of-the-art engineering.</p>
                </div>
                <div className='mt-4'>
                    <img src="https://i.ibb.co/RCr8xpj/Banner-1.jpg" className='w-full h-96 px-8' alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default About;