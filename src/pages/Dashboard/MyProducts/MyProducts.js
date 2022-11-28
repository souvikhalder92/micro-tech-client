import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const { user,logOut } = useContext(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://micro-tech-server.vercel.app/products/seller?email=${user?.email}`,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            
            return res.json();
        })
        .then(data => {
            setProducts(data);
        })
    }, [user?.email])

    const handleDelete = _id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this product');
        if(proceed){
            fetch(`https://micro-tech-server.vercel.app/products/seller/${_id}`, {
                method: 'DELETE',
                headers: {
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully !!!');
                    const remaining = products.filter(odr => odr._id !== _id);
                    setProducts(remaining);
                }
            })
        }
    }

    return (
        <div>
        <h2 className="text-5xl mt-3 font-semibold">You have {products.length} Products</h2>
        <div className="overflow-x-auto w-full mt-5 mb-5">
            <table className="table w-full">
                <thead>
                    <tr>
                       
                        <th></th>
                        <th>Sellers Name</th>
                        <th>Category name</th>
                        <th>Resale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <MyProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        ></MyProduct>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;