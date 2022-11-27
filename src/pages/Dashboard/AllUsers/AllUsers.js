import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const [orders, setOrders] = useState([])
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0){
                toast.success('Make admin successful!')
                refetch();
            }
        })
    }
    const handleDelete = id => {
      
        
            fetch(`http://localhost:5000/users/admin/${id}`, {
                method: 'DELETE',
                headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Delete successful!')
                    refetch();
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        

    }
 

    return (
        <div>
        <h2 className="text-3xl mb-4 mt-2">All Users</h2>
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
    users.map((user, i) =><tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role ? 'Admin' : user.category}</td>
        <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-info'>Make Admin</button>}</td>
        <td>{ user?.role !== 'admin' && <button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-danger'>Delete</button>}</td>
      </tr>)
  }
  
</tbody>
</table>
</div>
    </div>
    );
};

export default AllUsers;