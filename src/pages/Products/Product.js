import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({product,setService}) => {
  console.log(setService)
    
    const {_id,categoryName,name,img,location,originalPrice,resalePrice,postedDated,sellersName,description,condition,purchaseDate,mobile} = product;
    console.log(product)
    return (
        <div>
<div className="card w-11/12 mx-auto lg:card-side bg-base-200 shadow-xl  border rounded-tl-md">
  <div className="hero-content  flex-col">
    <img src={img} className="w-72 lg:w-96 h-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-semibold text-center">{categoryName}</h1>
      <p className="py-6"><span className='font-bold'>Model:</span> {name}</p>
     
      <p className="py-6"><span className='font-bold'>Key features:</span> {description}</p>
    
     
      <p className="py-6"><span className='font-bold'>Condition:</span> {condition}</p>
      <div>
      <p><span className='font-bold'>Seller's Name:</span> <span className='font-bold text-amber-600'>{sellersName}</span></p>
      <p><span className='font-bold'>Location: </span>{location}</p>
      <p><span className='font-bold'>Original Price: </span>${originalPrice}</p>
      <p><span className='font-bold'>Resale Price: </span>${resalePrice}</p>
      <p><span className='font-bold'>Purchase Date: </span>{purchaseDate}</p>
      <p><span className='font-bold'>Posted Date: </span>{postedDated}</p>
      <p><span className='font-bold'>Contact: </span>{mobile}</p>
      </div>
      <label 
            htmlFor="booking-modal"
            className="btn btn-info text-white mx-28 lg:mx-64 mt-5"
            onClick={() => setService(product)}
            >Book Now</label>
    </div>
  </div>
</div>
</div>
    );
};

export default Product;