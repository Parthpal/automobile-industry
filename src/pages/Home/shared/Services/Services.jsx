import React from 'react';

const Services = () => {
    return (<>
        <div className='mx-auto mb-10'>
        <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/bQHNXvP/auto-mobile-logo.png" alt="Shoes" className="rounded-xl mx-auto w-20 h-20" />
        </figure>
        <h2 className="text-center text-4xl font-bold text-[#2196C4]">Vehicle Services</h2>
        </div>
        <div  className='grid lg:grid-cols-3 grid-cols-1 bg-gray-800 py-16 '>
            <div className='grid grid-cols-1 mx-auto text-white text-left my-8'>
                <h2 className="text-2xl font-bold border-t-2 border-b-2 border-1 pt-10">Auto Repairing</h2>
                <h2 className="text-2xl font-bold border-b-2 border-1 pt-10">Vehicle Checkup</h2>
                <h2 className="text-2xl font-bold border-b-2 border-1 pt-10">Transmission Inspection</h2>
            </div>
            <div className='text-white text-justify my-8 '>
                <p className="text-xl font-semibold text-white mx-4">Auto repairing is the heartbeat of vehicle maintenance, where skilled hands breathe life back into automobiles. It's the art of diagnostics, the precision of repair, and the commitment to reliability. From routine tune-ups to intricate fixes, auto repairing is the guardian of vehicular health, ensuring that every engine roars to life and every journey is smooth. In the hands of expert technicians, it's not just about fixing problems; it's about restoring confidence and keeping the wheels of life in motion.</p>
            </div>
            <div className='text-white text-left text-xl my-8 font-semibold lg:ml-16 ml-8 lg:mr-2 mr-0'>
                <ol className='list-disc '>
                   <li> Cutting-edge tools for accurate problem identification.</li>
    
                    <li>Trained professionals ensuring precision in every repair.</li>
                    
                    <li> From routine maintenance to complex repairs, we cover it all.</li>
                    
                    <li> Utilizing genuine and high-quality replacement components.</li>
                    
                    <li> Prompt service to get you back on the road swiftly.</li>
                    
                </ol>
            </div>
        </div>
        </>);
};

export default Services;