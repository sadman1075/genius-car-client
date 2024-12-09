import React, { useEffect, useState } from 'react';

const OrderDetails = ({ order, handledelete }) => {
    const { _id, serviceName, email, price, customer, phone, service } = order
    const [orderservices, setorderservices] = useState([])
    useEffect(() => {
        fetch(`https://y-gold-psi.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setorderservices(data))
    }, [service])




    return (

        <tr >
            <th>
                <label>
                    <button onClick={() => handledelete(_id)} >X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-rounded w-24 h-24">
                            {
                                orderservices?.img &&
                                <img src={orderservices.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>

                </div>
            </td>
            <td>{customer} </td>
            <td>{phone}</td>
            <td>{serviceName}</td>
            <td>{price} </td>

        </tr>

    );
};

export default OrderDetails;