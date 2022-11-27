import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSeller = () => {
    const { user,logOut } = useContext(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products/seller?email=${user?.email}`,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            
            return res.json();
        })
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    }, [user?.email])
    return (
        <div>
        <h2 className="text-3xl mb-4 mt-2">All Sellers</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Category</th>
    <th>Admin</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {
    products.map((user, i) =><tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
 
      </tr>)
  }
  
</tbody>
</table>
</div>
    </div>
    );
};

export default AllSeller;