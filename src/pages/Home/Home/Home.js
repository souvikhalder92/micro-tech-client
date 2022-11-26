import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
          <Banner></Banner>
          <Categories></Categories>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;