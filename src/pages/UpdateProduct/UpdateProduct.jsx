import React from 'react';
import Header from '../Home/shared/Header/Header';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const loaderData=useLoaderData();
    const {_id,name,image,brand,price,type,rating}=loaderData;
    const handleUpdateForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.p_name.value;
        const brand=form.b_name.value;
        const type=form.productList.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const image=form.photo.value;
        const updateProductData={image,name,brand,type,price,rating};
        console.log(updateProductData);
        fetch(`https://ph-automotive-server.vercel.app/products/${_id}`,{
            method:"PUT",
            headers: {
                'content-type': 'application/json'
              },
            body: JSON.stringify(updateProductData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire('Data updated');
            }
        })
    }
    return (<>
    <Header/>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateForm}  className="card-body ">
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='p_name' defaultValue={name} placeholder="Product Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                {/* <input type="text" name='b_name' defaultValue={brand} placeholder="Brand Name" className="input input-bordered" required /> */}
                                <select name='b_name' className="select select-bordered w-full max-w-xs">
                                        <option value={brand} selected disabled hidden>{brand}</option>
                                        <option value='Toyota'>Toyota</option>
                                        <option value='Ford'>Ford</option>
                                        <option value='BMW'>BMW</option>
                                        <option value='Mercedes'>Mercedes</option>
                                        <option value='Tesla'>Tesla</option>
                                        <option value='Honda'>Honda</option>
                                    </select>
                               
                                </div>

                                
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <select name='productList' className="select select-bordered w-full max-w-xs">
                                        <option value={type} selected disabled hidden>{type}</option>
                                        <option value='tyre'>Tyre</option>
                                        <option value='MotorBike'>MotorBike</option>
                                        <option value='car'>Car</option>
                                        <option value='truck'>Truck</option>
                                    </select>
                                </div>

                                
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' defaultValue={price}  placeholder="price" className="input input-bordered" required />
                                </div>
                                
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" name='rating'  defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                                </div>
                                
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo'  defaultValue={image} placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        
                        </form>
                        </div>
                    </div>
                    </div>
            </div>
        </>);
};

export default UpdateProduct;