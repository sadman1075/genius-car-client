import React from 'react';
import './Banner.css'

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousal-img'>
                        <img src={img1} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute lg:lg:left-24 flex justify-end transform -translate-y-1/2   top-1/4">
                        <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                            Affordable <br />
                            Price for Car <br />
                            Servicing

                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  top-1/2">
                        <p className='text-white text-xs lg:text-xl text-white'>There are many variations of passages of available,but the majority have suffered alteration in some form </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-5 top-2/3 mt-10 lg:absolute flex justify-start transform -translate-y-1/2 w-1/2 lg:lg:left-24  top-2/3">
                        <button className="btn btn-secondary mr-5">Secondary</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className='carousal-img'>
                        <img src={img2} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute flex justify-end transform -translate-y-1/2 lg:left-24  top-1/4">
                        <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                            Affordable <br />
                            Price for Car <br />
                            Servicing

                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  top-1/2">
                        <p className='text-white text-xs lg:text-xl text-white'>There are many variations of passages of available,but the majority have suffered alteration in some form </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-5 top-2/3 mt-10 lg:absolute flex justify-start transform -translate-y-1/2 w-1/2 lg:left-24  top-2/3">
                        <button className="btn btn-secondary mr-5">Secondary</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='carousal-img'>
                        <img src={img3} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute flex justify-end transform -translate-y-1/2 lg:left-24  top-1/4">
                        <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                            Affordable <br />
                            Price for Car <br />
                            Servicing

                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:left-24  top-1/2">
                        <p className='text-white text-xs lg:text-xl text-white'>There are many variations of passages of available,but the majority have suffered alteration in some form </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-5 top-2/3 mt-10 lg:absolute flex justify-start transform -translate-y-1/2 w-1/2 lg:left-24  top-2/3">
                        <button className="btn btn-secondary mr-5">Secondary</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='carousal-img'>
                        <img src={img4} className="w-full" />
                    </div>                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute flex justify-end transform -translate-y-1/2 lg:left-24  top-1/4">
                        <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                            Affordable <br />
                            Price for Car <br />
                            Servicing

                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:left-24  top-1/2">
                        <p className='text-white text-xs lg:text-xl text-white'>There are many variations of passages of available,but the majority have suffered alteration in some form </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-5 top-2/3 mt-10 lg:absolute flex justify-start transform -translate-y-1/2 w-1/2 lg:left-24  top-2/3">
                        <button className="btn btn-secondary mr-5">Secondary</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;