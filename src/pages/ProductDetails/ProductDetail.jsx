import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({product}) => {
    const {_id,name,image,brand,type,price,rating}=product;
    return (

        <div>
                <div className="card w-96 bg-base-100 shadow-2xl mx-auto rounded-none">
                    <figure><img className='w-96 h-64' src={`${image}`} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p><span className='border-2 rounded-lg p-2 border-[#D2583E] mr-3 text-[#2196C4]'>{brand}</span>
                        <span className='border-2 rounded-lg p-2 border-[#D2583E] text-[#2196C4] '>{type}</span>
                        </p>
                        
                        <h2 className="text-xl">Product name: {name}</h2>
                        <h2 className="text-xl">Product Price: ${price}</h2>
                        <h2 className="text-xl">Product Rating: {rating}/5</h2>
                        <div className="card-actions justify-center border-t-2 border-[#D2583E] mt-2 pt-4">
                        <Link to={`/product/${name}`}>
                        <button className="btn w-full bg-[#2196C4] text-white">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                        <button className="btn w-full bg-[#2196C4] text-white">Update</button>
                        </Link>
                    </div>
                    </div>
                    </div>
            
        </div>
    );
};

export default ProductDetail;