import React from 'react';
import { Link } from 'react-router-dom';

const BrandDetails = ({bName}) => {
    const {brandName,image}=bName;
    return (
                 
                    <div>
                        <Link to={`/brands/${brandName}`}>
                          <div className="card rounded-none w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={`${image}`} alt="brand" className="rounded-xl w-20 h-14" />
                        </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#D2583E]">{brandName}</h2>
                            </div>
                        </div>
                        </Link>
                    </div>
               
    );
};

export default BrandDetails;