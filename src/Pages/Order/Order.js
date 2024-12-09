import React, { useContext, useEffect, useState } from 'react';
import { Authcontex } from '../../Context/Context';
import OrderDetails from '../OrderDetails/OrderDetails';


const Order = () => {
    const { user } = useContext(Authcontex)
    const [orders, setorders] = useState([])
    useEffect(() => {
        fetch(`https://y-gold-psi.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setorders(data))
    }, [user?.email])

    const handledelete = id => {
        const procced = window.confirm("Are you sure You want to cancel this order")
        if (procced) {
            fetch(`https://y-gold-psi.vercel.app/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setorders(remaining)
                    }

                })

        }
    }

    return (


        <div className="overflow-x-auto my-8">
            <table className="table">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <button>Delete</button>
                            </label>
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Services</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <OrderDetails key={order._id} order={order} handledelete={handledelete}></OrderDetails>)
                    }


                </tbody>


            </table>
        </div>

    );
};

export default Order;