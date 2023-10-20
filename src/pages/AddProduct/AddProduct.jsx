import React from 'react';
import Header from '../Home/shared/Header/Header';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleProductForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.p_name.value;
        const brand=form.b_name.value;
        const type=form.productList.value;
        const price=form.price.value;
        const description=form.desc.value;
        const rating=form.rating.value;
        const image=form.photo.value;
        const productData={image,name,brand,type,price,rating,description};

        console.log(productData);
        fetch('https://ph-automotive-server.vercel.app/products',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
              },
            body:JSON.stringify(productData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('Data inserted');
            }
        })
        e.target.reset();
    }
    

    return (<>
        <Header/>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleProductForm} className="card-body ">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='p_name' placeholder="Product Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            {/* <input type="text" name='b_name' placeholder="Brand Name" className="input input-bordered" required /> */}
                            <select name='b_name' className="select select-bordered w-full max-w-xs">
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
                            <input type="text" name='price'  placeholder="price" className="input input-bordered" required />
                            </div>
                            
                            
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='desc' placeholder="Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                            </div>
                            
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none btn-primary bg-[#2195C4]">Add Product</button>
                        </div>
                    
                    </form>
                    </div>
                </div>
                </div>
        </div>
        
        </>);
};

export default AddProduct;