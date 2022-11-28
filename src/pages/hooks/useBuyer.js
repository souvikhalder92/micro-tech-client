import React, { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    
  
    useEffect(() => {
        if (email) {
            fetch(`https://micro-tech-server.vercel.app/users/sellers?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.status);
                    setIsBuyerLoading(false);
                  
                })
        }
    }, [email])
    return [isBuyer,isBuyerLoading]
};

export default useBuyer;