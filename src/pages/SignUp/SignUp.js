import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin} = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const [status, setStatus] = useState("Buyer");
    const [verify, setVerify] = useState("Not Verify");

    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate('/login');
    }
    
   

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                setCreatedUserEmail(user.email);
            })
            })
        .catch(error => console.log(error))
    
      }
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        setStatus(data.status);
        console.log(data.status);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
               
                
            toast('WOW!Successful Registration!')
             const userInfo = {
                  displayName: data.name
               }
                updateUser(userInfo)
                     .then(() => {
                        saveUser(data.name, data.email, data.status, verify);
                     })
             .catch(err => console.log(err));
             })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message);
                
            });
    }
      
    const saveUser = (name, email, status , verify) =>{
        const user ={ name, email, status , verify};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
            setStatus(status);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 shadow-xl bg-slate-100'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-2 border p-2">
                <select {...register("status", { required: true })}>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
      </select>
      </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account ?<Link className='text-secondary' to="/login"> Please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

        </div>
    </div>
    );
};

export default SignUp;