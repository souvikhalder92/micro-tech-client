import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen  mt-4 mb-5 lg:w-full w-11/12 mx-auto" style={{ backgroundImage: `url("https://i.ibb.co/tZJf9ST/ecommerce-gd81494977-1920-1.jpg")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Micro Tech</h1>
            <p className="mb-5">We try to provide best product in <br/> our website.Get in touch with us.</p>
            <Link to='/'><button className="btn btn-info">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;