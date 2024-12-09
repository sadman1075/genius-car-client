import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Authcontex } from '../../Context/Context';



const Login = () => {
    const {loginuser}=useContext(Authcontex)
 const [error,seterror]=useState('')

    const handlelogin = (event) => {
        event.preventDefault();
      
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password)
        loginuser(email,password)
        .then(result=>{
            const user=result.user;
            seterror(false)
            Form.reset()
            console.log(user)
        })
        .catch(error=>{
            seterror("Your Email/Password is Wrong")
        })
    }

    return (
        <div>
            <div className="hero w-full my-20 ">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-4/5' src={login}></img>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Login</h1>

                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-600 text-center'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-orange-600' type="submit" value='login' />
                            </div>
                            <div>
                                <h1 className='text-center my-2'>Or Sing in With</h1>
                            </div>
                            <div className='flex justify-center'>
                                <Link to=''><FaFacebook className='text-blue-400 mr-2 text-3xl'></FaFacebook></Link>
                                <Link to=''><FcGoogle className='text-3xl mr-2'></FcGoogle></Link>
                                <Link to=''> <FaLinkedinIn className='text-3xl  text-blue-500'></FaLinkedinIn></Link>                           
                                 </div>
                                 <div>
                                    <h1 className='text-center'>Dont Have Any Account? <Link className='text-orange-600 font-bold' to='/registration'>Registration</Link></h1>
                                 </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;