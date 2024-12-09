import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontex } from '../../../Context/Context';

const ServicesCard = ({ service }) => {
    const { img, title, price } = service
    const { user } = useContext(Authcontex)
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl">
                        {
                            title
                        }
                    </h2>
                    <p className='text-2xl font-semibold text-orange-600'>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        {
                            user?.email ?
                            <Link className='btn bg-orange-600' to={`/cheakout/${service._id}`}>Buy Now</Link>:
                            <Link className='btn bg-orange-600' to='/login'>Buy Now</Link>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;