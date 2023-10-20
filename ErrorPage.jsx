import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        
            <div className='text-center my-20' id="error-page">
            <h1 className='text-5xl'>Oops!</h1>
            <p className='text-2xl text-[#FF655C] '>Sorry, an unexpected error has occurred.</p>
            <p className='text-2xl'>
                <i>{error.statusText || error.message}</i>
            </p>
            </div>
        
    );
};

export default ErrorPage;