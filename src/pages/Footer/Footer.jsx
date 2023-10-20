import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<div className='mt-10'>
            <footer className=" dark:text-white dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:gap-16 gap-5 lg:grid-cols-4 text-center  p-10 bg-base-200 text-base-content">
                <aside className='grid grid-cols-1 mb-4'>
                <figure className="px-10">
                <img src="https://i.ibb.co/bQHNXvP/auto-mobile-logo.png" alt="Shoes" className="rounded-xl mx-auto w-20 h-20" />
                </figure>
                    <p className='text-xl font-semibold'>PH Automotive LTD</p><br/>
                    <p>Providing reliable Automotive services since 1992</p>
                </aside> 
                <nav className='grid grid-cols-1 lg:text-justify mb-4'>
                     <header className="  font-semibold text-[#D2583E]">Brands</header> 
                    <a className="link link-hover ">Toyota</a> 
                    <a className="link link-hover">Ford</a> 
                    <a className="link link-hover">BMW</a> 
                    <a className="link link-hover">Mercedes</a>
                </nav> 
                <nav className='grid grid-cols-1 lg:text-justify mb-4'>
                    <header className="  font-semibold text-[#D2583E]">Company</header> 
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/addToCart">My Cart</Link>
                    <Link className="link link-hover" to="/addProduct">Add Products</Link>
                    <Link className="link link-hover" to="/login">Login</Link>
                </nav> 
                <nav className='grid grid-cols-1 mb-4 lg:text-justify'>
                <header className="  font-semibold text-[#D2583E]">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
         </footer>
        </div>
    );
};

export default Footer;