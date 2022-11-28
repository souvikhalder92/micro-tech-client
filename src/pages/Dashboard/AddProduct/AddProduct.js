import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const {_id}  = useLoaderData();
    const [product,setProduct] = useState([]);
  
   
    const url = `https://micro-tech-server.vercel.app/products`;

    useEffect(() =>{
       fetch(url)
       .then(res => res.json())
       .then(data => setProduct(data))

    },[product])


    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const categoryname = form.categoryName.value;
        const itemname = form.itemName.value;
        const photoURL = form.photoURL.value;
        const location = form.location.value;
        const resaleprice = form.resaleprice.value;
        const originalprice = form.originalprice.value;
        const description = form.description.value;
        const condition = form.condition.value;
        const postedDated = form.posteddated.value;
        const purchaseDate = form.purchasedated.value;
        const sellersName = form.sellersname.value;
        const mobile = form.mobile.value;

          console.log(purchaseDate);
        const product = {
         service: _id,
         email: email,
         categoryName: categoryname,
         name: itemname,
         img: photoURL,
         description: description,
         location: location,
         resalePrice: resaleprice,
         originalPrice: originalprice,
         condition: condition,
         postedDated: postedDated,
         purchaseDate: purchaseDate,
         sellersName: sellersName,
         mobile: mobile

        }
        fetch('https://micro-tech-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Product Added successfully!!')
                    form.reset();
                    navigate('/');
                    
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='mt-5 mb-24'>
            <p className='text-center font-semibold text-4xl mb-3'>Add A Product</p>
       
        <form onSubmit={handleService} className="mt-10 w-11/12 mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:border shadow-xl  lg:p-5   lg:border-slate-300 hover:border-stone-400 '>
        <input name="email" type="email" placeholder="Email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly/>
            <input name="categoryName" type="text" placeholder="Category Name" className="input input-ghost w-full  input-bordered" required/>
            <input name="itemName" type="text" placeholder="Item Name" className="input input-ghost w-full  input-bordered" required/>
            <input name="photoURL" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" required />
            <input name="location" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered" required/>
            <input name="resaleprice" type="number" placeholder="Resale Price" className="input input-ghost w-full  input-bordered" required/>
            <input name="originalprice" type="number" placeholder="Original Price" className="input input-ghost w-full  input-bordered" required/>
            <input name="condition" type="text" placeholder="Condition" className="input input-ghost w-full  input-bordered" required/>
            <h4>Posted Date: <input name="posteddated" type="date" placeholder="Posted Date" className="input input-ghost w-full  input-bordered mt-1" required/></h4>
            <h4>Purchase Date:<input name="purchasedated" type="date" placeholder="Purchase Date" className="input input-ghost w-full  input-bordered mt-1" required/></h4>
            <input name="sellersname" type="text" placeholder="Sellers Name" className="input input-ghost w-full  input-bordered" required/>
            <input name="mobile" type="number" placeholder="Contact" className="input input-ghost w-full  input-bordered" required/>
            <textarea name="description" className="textarea textarea-bordered h-24 w-full " placeholder="Description" required></textarea>
        </div>
      
         <div className='text-center mb-5'>
        <input className='btn bg-info text-white mt-4' type="submit" value="Add Product" />
        
        </div>
    </form>
    </div>
    );
};

export default AddProduct;