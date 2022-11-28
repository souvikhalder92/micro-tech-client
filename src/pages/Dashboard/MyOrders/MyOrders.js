import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [bookings,setBookings] = useState([]);

    useEffect(() =>{
        axios.get(`https://micro-tech-server.vercel.app/bookings?email=${user?.email}`,{
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}` 
             }

        })
        .then(data => setBookings(data.data));

    },[])
    return (
        <div>
        <h3 className="text-3xl mb-5 mt-2">My Orders</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th className='px-56'>Item</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.client}</td>
                                <td>{booking.item}</td>
                                <td>${booking.resalePrice}</td>
                                <td>
                                  
                                {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Paid</span>
                                    }

                                </td>
                            </tr>)
                        }
              
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;