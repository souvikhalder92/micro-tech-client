import React from 'react';

const MyProduct = ({ product, handleDelete}) => {
    const { _id, categoryName, mobile, sellersName , resalePrice, name, status,location,img } = product;
    console.log(product);
    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-5">
                <div className="avatar">
                    <div className="rounded w-20 h-20">
                        {
                            
                            <img src={img} className="mr-auto" alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
                <div>
                    <div className="font-bold">{sellersName}</div>
                    <div className="text-sm opacity-50">{mobile}</div>
                </div>
            </div>
        </td>
        <td>
            {categoryName}
            <br />
        
        </td>
        <td>${resalePrice}</td>
      
    </tr>
    );
};

export default MyProduct;