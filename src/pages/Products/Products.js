import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const products = useLoaderData();
  
 const  {data:prod = []} = useQuery({
    queryKey: ['prod'],
    queryFn: () => fetch(`http://localhost:5000/products?categoryName=${products.categoryName}`)
    .then(res => res.json())
  
})


  


    return (
        <div>
            <h1 className='lg:text-center text-3xl font-semibold'>All Products For {products.categoryName}</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 mb-5'>
            {
                prod.map(product => <Product
                key={product.id}
                product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;