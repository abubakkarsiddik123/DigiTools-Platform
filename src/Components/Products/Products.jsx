import React, { use, useState, } from 'react';
import Tabs from './Tabs/Tabs';
import ProductsCart from '../ProductsCart/ProductsCart';
import Cart from './Cart/Cart';

const Products = ({productsPromise,carts,setCarts}) => {
    const [activeTabs,setActiveTabs]=useState("products")
    
    console.log(carts);
    const products=use(productsPromise)
    return (
        <div className='max-w-[1200px] mx-auto mt-32'>
           <div className="text-center space-y-4">
            <h2 className='text-5xl font-extrabold text-[#101727] '>Premium Digital Tools</h2>
            <p className='text-[#627382]  '>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div> 
            <Tabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} carts={carts} />
            { activeTabs === 'products' ? <ProductsCart products={products} carts={carts} setCarts={setCarts} /> :<Cart carts={carts} setCarts={setCarts} /> }
           
        </div>
    );
};

export default Products;