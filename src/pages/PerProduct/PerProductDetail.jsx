import React from 'react';
import Header from '../Home/shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const PerProductDetail = () => {
    const loadedData=useLoaderData();
    const {name}=useParams();
    const {user}= useContext(AuthContext);
    const matchedData=loadedData.find(Aproduct=>Aproduct.name == name);

    const handleCartData=(e)=>{
        const email=user.email;
        const brand=matchedData.brand;
        const name=matchedData.name;
        const price=matchedData.price;
        const type=matchedData.type;
        const cartData={email,name,brand,type,price};
        console.log(cartData);
        fetch('https://ph-automotive-server.vercel.app/cart',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
              },
            body:JSON.stringify(cartData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('Product Added to the Cart');
            }
        })
        e.target.reset();
    }
    return (
        <div>
        <Header/>
        <div>
            <div className="hero" style={{backgroundImage: `url(${matchedData.image})`,height:'550px',backgroundPosition:'center top' ,backgroundRepeat:'no-repeat'}}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl uppercase font-bold text-yellow-200">{matchedData.brand}</h1>
                    <h1 className="mb-5 text-5xl uppercase font-bold text-yellow-200">{matchedData.type}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-24 lg:mx-64 mx-4'>
                  <p className='mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>{matchedData.brand} {matchedData.type} {matchedData.name} {matchedData.description}</p>
            <div className=' py-3 ' >
                <button onClick={handleCartData} className=' btn w-full bg-[#2195C3] md:text-3xl text-base text-center font-bold text-white' >${matchedData.price}/Add to Cart </button>
            </div>
            </div>
            
            
        </div>
        </div>
    );
};

export default PerProductDetail;