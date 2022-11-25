import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product)
    const {_id,categoryName,name,img,location,originalPrice,resalePrice,postedDated,sellersName,description} = product;
    return (
<div className="hero w-11/12 mx-auto bg-base-200">
  <div className="hero-content flex-col flex-col">
    <img src={img} className="w-96 h-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-semibold text-center">{categoryName}</h1>
      <p className="py-6"><span className='font-bold'>Model:</span> {name}</p>
      <p className="py-6"><span className='font-bold'>Key features:</span> {description}</p>
      <div>
      <p><span className='font-bold'>Seller's Name:</span> <span className='font-bold text-amber-600'>{sellersName}</span></p>
      <p><span className='font-bold'>Location: </span>{location}</p>
      <p><span className='font-bold'>Original Price: </span>${originalPrice}</p>
      <p><span className='font-bold'>Resale Price: </span>${resalePrice}</p>
      <p><span className='font-bold'>Posted Date: </span>{postedDated}</p>
      </div>
      <button className="btn btn-primary mx-48 mt-5 px-8">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default Product;