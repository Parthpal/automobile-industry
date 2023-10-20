import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Home/shared/Header/Header';
import ProductDetail from './ProductDetail';
import ProductDetailsSlider from './ProductDetailsSlider';

const ProductDetails = () => {
    const loadedData=useLoaderData();
    const {brandName}=useParams();
    const brandNameString=brandName.toString();
    console.log(brandNameString);
    const matchedData=loadedData.filter(Aproduct=>Aproduct.brand == brandName);
   // console.log(products.brand);
   console.log('match data length', matchedData.length);
    return (<>
        <Header/>
        <ProductDetailsSlider/>
    
        <div className='grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2 my-16'>
             
             {
               matchedData.length ? matchedData.map(product=><ProductDetail product={product}></ProductDetail>):
                <h3 className='text-3xl'>Product not available</h3>
             }


        </div>
        </>);
};

export default ProductDetails;