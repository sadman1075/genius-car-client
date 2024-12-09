import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://y-gold-psi.vercel.app/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-8'>
                <h1 className='text-orange-700 text-2xl font-bold my-4'>Services</h1>
                <h1 className='text-black text-5xl my-6 '>Our Service Area</h1>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore iure dolore, deleniti impedit illum neque temporibus voluptatem libero est repudiandae incidunt, quam nulla aspernatur aperiam magnam hic aliquid cumque minus.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;