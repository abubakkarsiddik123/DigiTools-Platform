import React from 'react';
import Carts from './Carts/Carts';

const ProductsCart = ({products,carts,setCarts}) => {
    return (
        <div className='grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {
            products.map(item=> <Carts key={item.id} item={item} carts={carts} setCarts={setCarts} /> )
        }
        
        </div>
     
    );
};

export default ProductsCart;