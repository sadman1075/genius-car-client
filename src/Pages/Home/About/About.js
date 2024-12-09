import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero my-12 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-full mb-16 lg:relative w-1/2'>
                        <img src={person}  className= 'w-4/5 h-full rounded-lg shadow-2xl border-solid border-2 border-black'/>
                        <img src={parts} className='absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl border-solid border-2 border-black' />


                    </div>
                    <div className='w-full lg:w-1/2'>
                        <p className=' text-2xl font-bold text-orange-500 mb-4'>About us</p>
                        <h1 className="text-3xl font-bold lg:text-5xl font-bold">We are qualified  <br />
                            & of experience <br />
                            in this field</h1>
                        <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quas ducimus illo blanditiis. Molestiae voluptatem aperiam impedit voluptate cum, modi dignissimos repellat veritatis! Animi praesentium et distinctio laborum maxime perferendis.</p>
                        <p className="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quas ducimus illo blanditiis. Molestiae voluptatem aperiam impedit voluptate cum, modi dignissimos repellat veritatis! Animi praesentium et distinctio laborum maxime perferendis.</p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;