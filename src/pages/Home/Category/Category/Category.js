import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name,img} = category;
    return (
        <div className="card w-3/4 lg:w-96 bg-gray-100 shadow-xl mx-auto lg:mx-0">
     
              <figure><img className='w-full h-52' src={img} alt="" /></figure>
                <div className="card-body">
                  <h2 className="font-semibold text-center text-3xl text-gray-700">{name}</h2>
                
                  <div>
                  
                        <Link className="flex"><button className="btn  bg-blue-400 border-none  mt-3 mx-auto">
                       Show Product<FaArrowRight className='ml-1'></FaArrowRight></button></Link>
                   
                   
                  </div>
                </div>
              </div>
        
    );
};

export default Category;