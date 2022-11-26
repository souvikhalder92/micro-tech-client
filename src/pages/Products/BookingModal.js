import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({service,setService}) => {
     const {name: serviceName,resalePrice} = service;
    const {user} = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const location = form.location.value;
     
        const booking = {
            item: serviceName,
            client: name,
            email,
            phone,
            resalePrice,
            location
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setService(null);
                    toast.success('Successfully Booked!');
                  
                  
                }
                else{
                    toast.error(data.message);
                }
            })
       
    }

    
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{serviceName}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name="name" type="text"  defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="resalePrice" type="number" defaultValue={resalePrice} disabled placeholder="Resale Price" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required/>
                    <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required/>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;