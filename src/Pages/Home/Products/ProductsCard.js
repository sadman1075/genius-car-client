import React from 'react';

const ProductsCard = ({product}) => {
    const{price,title,img}=product
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-8">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" width={"w-32"} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-red-600'>Price: {price} $</p>
            </div>
        </div>
    );
};

export default ProductsCard;