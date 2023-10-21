import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;