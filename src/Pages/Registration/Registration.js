import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { Authcontex } from '../../Context/Context';

const Registration = () => {
    const { createuser } = useContext(Authcontex)
    const [error, seterror] = useState();

    const handleregister = (event) => {
        event.preventDefault();
        const Form = event.target;
        const name = Form.name.value
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password)
        if (!/(?=.*?[A-Z])/.test(password)) {
            seterror('At least one upper case English letter');
            return;
        }
        if (!/(?=.*?[a-z])/.test(password)) {
            seterror('At least one lower case English letter')
            return;
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            seterror('At least one digit')
            return;
        }

        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            seterror('At least one special character')
            return;
        }
        if (!/.{8,}/.test(password)) {
            seterror('Minimum eight in length')
            return;
        }
        seterror('')
        createuser(email, password)
            .then(result => {
                const user = result.user;
                seterror(false);
                Form.reset();
                alert("You Have Successfully Created Account")
            })
            .catch(error => {
                seterror(error.message)
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
                        <h1 className="text-5xl text-center font-bold">Sing Up</h1>

                        <form onSubmit={handleregister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div>
                                <p className='text-red-600 text-center'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-orange-600' type="submit" value='Singup' />
                            </div>
                            <div>
                                <h1 className='text-center my-2'>Or Sing Up With</h1>
                            </div>
                            <div className='flex justify-center'>
                                <Link to=''><FaFacebook className='text-blue-400 mr-2 text-3xl'></FaFacebook></Link>
                                <Link to=''><FcGoogle className='text-3xl mr-2'></FcGoogle></Link>
                                <Link to=''> <FaLinkedinIn className='text-3xl  text-blue-500'></FaLinkedinIn></Link>
                            </div>
                            <div>
                                <h1 className='text-center'>Already Have Any Account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;