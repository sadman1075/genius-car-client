import React from 'react';
import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Team = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-red-600 text-xl mb-4'>Team</p>
                <p className='text-4xl text-black mb-4'>Meet Our Team</p>
                <p className='text-small text-black mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus facilis optio quae harum architecto accusamus molestiae quas ut suscipit?

                </p>
            </div>

            <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2  gap-4 '>
            <div className="card w-96 bg-base-100 shadow-xl my-8">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" width={"w-32"} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl">Car Engine Plug</h2>
                        <p className='text-small text-red-600'>Engine Expert</p>
                        <div className='flex gap-3 mt-3'>
                            <BsFacebook className='text-3xl text-blue-900' ></BsFacebook>
                            <BsTwitter className='text-3xl text-blue-500'></BsTwitter>
                            <BsLinkedin className='text-3xl text-blue-700' ></BsLinkedin>
                            <BsInstagram className='text-3xl text-red-600'  ></BsInstagram>

                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl my-8">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" width={"w-32"} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl">Car Engine Plug</h2>
                        <p className='text-small text-red-600'>Engine Expert</p>
                        <div className='flex gap-3 mt-3'>
                            <BsFacebook className='text-3xl text-blue-900' ></BsFacebook>
                            <BsTwitter className='text-3xl text-blue-500'></BsTwitter>
                            <BsLinkedin className='text-3xl text-blue-700' ></BsLinkedin>
                            <BsInstagram className='text-3xl text-red-600'  ></BsInstagram>

                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl my-8">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" width={"w-32"} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl">Car Engine Plug</h2>
                        <p className='text-small text-red-600'>Engine Expert</p>
                        <div className='flex gap-3 mt-3'>
                            <BsFacebook className='text-3xl text-blue-900' ></BsFacebook>
                            <BsTwitter className='text-3xl text-blue-500'></BsTwitter>
                            <BsLinkedin className='text-3xl text-blue-700' ></BsLinkedin>
                            <BsInstagram className='text-3xl text-red-600'  ></BsInstagram>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;