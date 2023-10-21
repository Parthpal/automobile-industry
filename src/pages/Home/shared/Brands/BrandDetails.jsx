import React from 'react';
import { Link } from 'react-router-dom';

const BrandDetails = ({bName}) => {
    const {brandName,image}=bName;
    return (
                 
                    <div>
                        <Link to={`/brands/${brandName}`}>
                          <div className="card rounded-none w-72 h-72 bg-base-100 shadow-2xl mx-auto pt-12">
                        <figure className="px-10 pt-10">
                            <img src={`${image}`} alt="brand" className="rounded-xl w-28 h-24" />
                        </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#D2583E] uppercase text-2xl font-bold">{brandName}</h2>
                            </div>
                        </div>
                        </Link>
                    </div>
               
    );
};

export default BrandDetails;