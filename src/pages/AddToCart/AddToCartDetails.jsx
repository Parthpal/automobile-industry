import React, { useContext } from 'react';
import Header from '../Home/shared/Header/Header';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const AddToCartDetails = ({cartProduct,setAddCartProduct,addCartProduct}) => {
    const {user}= useContext(AuthContext);
    const authUserEmail=(user.email).toString();
    const {_id,name,price,type,brand}=cartProduct;
    const handleDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove this from cart?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ph-automotive-server.vercel.app/cart/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res=> res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deletedCount > 0){
                           Swal.fire(
                            'Deleted!',
                            'Product Removed From the Cart',
                            'success'
                           )
                            const remaining=addCartProduct.filter(c_product=>c_product._id!==_id);
                            setAddCartProduct(remaining);
                        }
                    }) 
            }
        })
    }
    return (<>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>{brand}</th>
                                <td>{type}</td>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td><button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-outline btn-error">Delete</button></td>
                            </tr>
        </>);
};

export default AddToCartDetails;