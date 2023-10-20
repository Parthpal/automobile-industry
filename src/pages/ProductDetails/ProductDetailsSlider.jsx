import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider)
const ProductDetailsSlider = () => {
    return (
        <div >
                <div>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4500}
                >
                        {/* slider 1 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/jwCGLDL/toyota-car.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-white">Drive the Future, Today - Where Innovation Meets the Open Road.</h1>
                                        
                                    </div>
                                </div>
                        </div>
                        {/* slider 2 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/pxQSZwx/mercedes-motorbike.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-white">Unleash Your Freedom: Two Wheels, One Passion.</h1>
                                        
                                    </div>
                                </div>
                        </div>
                        {/* slider 3 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/jL4zddr/mercedes-truck.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-white">Powering Progress, Hauling Dreams - Built for the Long Haul</h1>

                                    
                                    </div>
                                </div>
                        </div>

                </AutoplaySlider>
                
        </div>
        </div>
    );
};

export default ProductDetailsSlider;