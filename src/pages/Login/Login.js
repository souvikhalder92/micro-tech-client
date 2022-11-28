import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Login = () => {
    const { register,formState: { errors }, handleSubmit,reset } = useForm();
    const { signIn,  providerLogin  } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    
   
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    
    const googleProvider = new GoogleAuthProvider();

    if(token){
        navigate('/');
    }
   

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            fetch('https://micro-tech-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                setLoginUserEmail(user.email);
            })
            })
        .catch(error => console.log(error))
    
      }
    
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                 setLoginUserEmail(data.email);
               
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div>
          <div className='h-[800px] flex justify-center items-center '>
        <div className='w-96 p-7 shadow-xl bg-slate-100'>
            <h2 className='text-3xl text-center font-bold text-orange-600'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
            
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p>New to Micro Tech ?<Link className='text-secondary' to="/signup"> Create new Account</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
        </div>
    );
};

export default Login;