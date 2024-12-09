import React from 'react';
import { MdAddLocationAlt, MdPhone } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const Contact = () => {
    return (
        <div className='bg-black mt-16 mb-16  justify-evenly h-60  lg:items-center lg:flex'>
            <div className='flex mb-4 justify-center'>
                <MdAccessTimeFilled className='text-red-500 text-5xl'></MdAccessTimeFilled>
                <div className='ml-5'>
                    <p className='text-white'>we are open monday-friday</p>
                    <p className='text-white text-2xl'>7:00 am - 9.00 Pm</p>
                </div>
            </div>
            <div className='flex mb-4 justify-center'>
                <MdPhone className='text-red-500 text-5xl mr-10' />

                <div className=''>
                    <p className='text-white'>Have Any Question?</p>
                    <p className='text-white text-2xl'>+01797506103</p>
                </div>
            </div>
            <div className='flex mb-4 justify-center' >
                <MdAddLocationAlt className='text-red-500 text-5xl ml-8'></MdAddLocationAlt>

                <div className='ml-5'>
                    <p className='text-white'>Need A Repair? Our Address</p>
                    <p className='text-white text-2xl'>Kuril KagiBari, Dhaka</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;