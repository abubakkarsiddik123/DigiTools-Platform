import React from "react";
import EmptyImage from "../../../assets/banner/trolley.png";
import { toast } from "react-toastify";

const Cart = ({ carts,setCarts }) => {
 const totalPrice = carts.reduce((sub, item) => sub + item.price, 0);
 const handlePayment =()=>{
  setCarts([])
  toast.success("Payment successful")
 }

const handleDelete=(item)=>{
    const filteredArray =carts.filter(i=> i.id !== item.id)
    setCarts(filteredArray)
    toast.success('Removed from cart')
  }

  return (
    <div className="p-10 bg-gray-50 rounded-lg mb-5 max-w-[1200px] mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="">
          <img className="mx-auto  w-20 opacity-30" src={EmptyImage} alt="" />
          <p className="text-2xl text-center p-5">Cart is Empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-[#F9FAFC]  rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#101727] ">{item.name}</h2>
                    <h3 className="text-[#627382]">${item.price} </h3>
                  </div>
                </div>
                <div>
                  <p onClick={()=>handleDelete(item)} className="text-red-500 cursor-pointer">delete</p>
                </div>
            
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5">
            <p className=" text-[#627382]">Total</p>
            <p className="text-2xl font-bold text-[#101727] ">$ {totalPrice}</p>
          </div>
          <button onClick={handlePayment} className="btn w-full mt-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  rounded-full p-4">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
