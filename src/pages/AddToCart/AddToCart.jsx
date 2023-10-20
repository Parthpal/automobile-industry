import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddToCartDetails from './AddToCartDetails';
import Header from '../Home/shared/Header/Header';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useContext } from 'react';

const AddToCart = () => {
    const {user}= useContext(AuthContext);
    const authUserEmail=(user.email).toString();
    //console.log(authUserEmail);
    const loadedData=useLoaderData();
    const matchedEmail=loadedData.filter(data=>data.email==authUserEmail);
    const [addCartProduct,setAddCartProduct]=useState(matchedEmail);
    
    //console.log(matchedEmail.email);
    return (<>
        <Header/>
        <div>
            <h3 className='text-3xl text-center font-semibold mb-5'>My Cart</h3>
            <div className="overflow-x-auto w-1/2 mx-auto">
            <table className="table">
                            {/* head */}
                            <thead className='bg-[#1E9ACB]'>
                            <tr className='text-white text-base'>
                                <th>Brand</th>
                                <th>Product</th>
                                <th>Product Version</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                  addCartProduct.length ?addCartProduct.map((cartProduct)=> <AddToCartDetails setAddCartProduct={setAddCartProduct} addCartProduct={addCartProduct} cartProduct={cartProduct}></AddToCartDetails>):
                                <h3 className='text-xl mx-auto text-black'>No Products In the cart</h3>      
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
        </>);
};

export default AddToCart;