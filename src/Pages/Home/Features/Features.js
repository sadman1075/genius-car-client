import React from 'react';
import img1 from '../../../assets/icons/group.svg';

import img3 from '../../../assets/icons/person.svg';
import img4 from '../../../assets/icons/Wrench.svg';
import img5 from '../../../assets/icons/check.svg';
import img6 from '../../../assets/icons/deliveryt.svg';


const Features = () => {
    return (
        <div className='my-20 '>
            <div className='text-center'>
                <p className='text-red-600 text-xl mb-4'>Core Features</p>
                <p className='text-4xl text-black mb-4'>Why Choose Us</p>
                <p className='text-small text-black mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus facilis optio quae harum architecto accusamus molestiae quas ut suscipit?

                </p>
            </div>
            <div className='grid grid-cols-2  ml-24  gap-5 lg:flex lg:justify-evenly'>
                <div>
                    <img src={img1} alt="" srcset="" />
                    <p>Expart Team</p>
                </div>

                <div>
                    <img src={img3} alt="" srcset="" />
                    <p>Support</p>
                </div>
                <div>
                    <img src={img4} alt="" srcset="" />
                    <p>Best EquipMent</p>
                </div>
                <div>
                    <img src={img5} alt="" srcset="" />
                    <p>100% Guranty</p>
                </div>
                <div>
                    <img src={img6} alt="" srcset="" />
                    <p>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;