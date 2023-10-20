import Swal from 'sweetalert2';
import Header from '../Home/shared/Header/Header';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
     const {createUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const nameVal=form.get('name');
        const photoVal=form.get('photo');
        const emailVal=form.get('email');
        const passwordVal=form.get('password');

        if(passwordVal.length<6){
            return toast('Password should be 6 Character');
        }
        else if(!/[A-Z]/.test(passwordVal)){
            return toast('Kindly use at least one capital letter');
        }
        else if(!/[^\w\s]/.test(passwordVal)){
            return toast('Kindly use at least one special character');
        }
        else
        {
            createUser(emailVal,passwordVal)
            .then((userCredential) => {
                // Signed up 
                const res_user = userCredential.user;
                updateProfile(res_user, {
                    displayName: nameVal, photoURL: photoVal
                  }).then(() => {
                    Swal.fire('Registration Successful');
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

              })
              .catch((error) => {
                toast('Registration failed,Try Again');
                // ...
              });

        }
        e.target.reset();
    }

    return (<>
    <Header/>
<div className='my-20'>
            <h3 className='text-3xl text-center mb-4 font-bold'>Register Here</h3>
            <div className="bg-base-200 md:w-1/3 w-2/3 mx-auto rounded-lg border-[#D2583E] border-2">
                <div className=" ">
                    <form onSubmit={handleRegister} className="card-body ">
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo link" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label mt-3">
                           <p>Already a Member! Please<Link className='label-text-alt link link-hover text-base text-yellow-600' to="/login"> Login</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-4">
                        <button className="btn bg-[#2195C3] text-white">Register</button>
                        </div>
                    </form>
                    </div>
            </div>
            <ToastContainer/>
        </div>
        </> );
};

export default Registration;