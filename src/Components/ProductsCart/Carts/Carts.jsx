import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

const Carts = ({ item ,carts,setCarts}) => {
  const [isProduct, setIsProduct] = useState(false);
  const handleProducts=()=>{
    setIsProduct(true)
    setCarts([...carts,item])
  }
  return (
    <div className="border-2 rounded-2xl border-[#F2F2F2] p-4 space-y-4">
      <div className="flex justify-end">
        <p
          className={`py-1 px-3 rounded-full text-sm ${
            item.tagType === "best seller"
              ? "bg-orange-100 text-orange-500"
              : item.tagType === "popular"
                ? "bg-purple-100 text-purple-500"
                : "bg-green-100 text-green-500"
          }`}
        >
          {item.tag}
        </p>
      </div>
      <div className="w-15 h-15 flex justify-center items-center border rounded-full border-[#F2F2F2]   p-2">
        <img src={item.icon} alt="" />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#101727]"> {item.name} </h2>
        <p className="text-[#627382] leading-5">{item.description}</p>
      </div>
      <div className="">
        <p>
          {" "}
          <span className="text-2xl font-bold text-[#101727]">
            ${item.price}
          </span>{" "}
          <span className="text-[#627382] ">/{item.period}</span>{" "}
        </p>
      </div>
      <div className="">
        <ul className="space-y-2">
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-[#627382]">
              <span className="text-green-500">
                {" "}
                <MdCheck />{" "}
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleProducts}
        className={`btn w-full   py-4 text-white rounded-full ${
          isProduct
            ? "  bg-green-500 hover:bg-green-600"
            : " bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"
        }`}
      >
        {isProduct ? (
          <span className="flex items-center justify-center gap-2">
            <MdCheck />
            Added to Cart !
          </span>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default Carts;
