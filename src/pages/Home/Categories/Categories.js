import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Category from '../Category/Category/Category';

const Categories = () => {

    const  {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://micro-tech-server.vercel.app/categories')
        .then(res => res.json())
      
    })


    return (
        <div className='mb-5'>
           <h1 className='text-4xl font-bold text-center text-amber-600'>All Laptop</h1>
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            {
                categories.map(category => <Category
                key={category.id}
                category={category}
            ></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;