import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("Products.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div>
            <div>
                <div className='text-center'>
                    <p className='text-red-600 text-xl mb-4'>Popular Products</p>
                    <p className='text-4xl text-black mb-4'>Browse Our Products</p>
                    <p className='text-small text-black mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus facilis optio quae harum architecto accusamus molestiae quas ut suscipit?

                    </p>
                </div>
                <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2  gap-4'>
                    {
                        products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Products;