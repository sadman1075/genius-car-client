import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { Authcontex } from '../Context/Context';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const CheakOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(Authcontex)

    const handleplaceorder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const item = form.item.value;
        const price = form.price.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: item,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://y-gold-psi.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset()
                }
            }
            )
            .catch(error => console.error(error))


    }

    return (
        <div>
            <form className='bg-gray-200 pb-8' onSubmit={handleplaceorder}>
                <h2 className='text-4xl text-orange-600 text-center'>Checkout</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-12 mx-12'>
                    <input type="text" name='first' placeholder="First Name" className="input input-bordered input-error w-full " required />
                    <input type="text" name='last' placeholder="Last Name" className="input input-bordered input-error w-full " required />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered input-error w-full" readOnly />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-error w-full " required />
                    <input type="text" name='item' placeholder="Order Items" defaultValue={title} className="input input-bordered input-error w-full " readOnly />
                    <input type="text" name='price' placeholder="Price" defaultValue={`${price}$`} className="input input-bordered input-error w-full " readOnly />
                </div>
                <div className='mx-12'>
                    <textarea name='message' placeholder="Your Message" className="textarea textarea-error textarea-lg w-full " required ></textarea>
                </div>
                <div className="form-control mt-6 mx-12">
                    <input className='btn bg-orange-600' type="submit" value='Place Your Order' />
                </div>
            </form>
        </div>
    );
};

export default CheakOut;