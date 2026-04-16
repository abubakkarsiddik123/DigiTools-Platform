import React from "react";

const Tabs = ({activeTabs,setActiveTabs}) => {
  console.log(activeTabs);
  return (
     <div className=" mx-auto flex justify-center items-center gap-4 m-10 border-[#F6F6F6] rounded-full border w-3xs">


      <label className="cursor-pointer">
        <input
          type="radio"
          name="tabs"
          className="hidden"
          checked={activeTabs === "products"}
          onChange={() => setActiveTabs("products")}
        />
        <div
          className={`px-7 py-3 rounded-full font-bold  
          ${activeTabs === "products"
            ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white "
            : "text-[#25065D] "}
          `}
        >
          Products
        </div>
      </label>

      {/* Carts */}
      <label className="cursor-pointer">
        <input
          type="radio"
          name="tabs"
          className="hidden"
          checked={activeTabs === "carts"}
          onChange={() => setActiveTabs("carts")}
        />
        <div
          className={`px-7 py-3 rounded-full font-bold
          ${activeTabs === "carts"
            ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white "
            : "text-[#25065D] "}
          `}
        >
          Carts
          {/* {`Carts (${carts.length})`} */}
        </div>
      </label>

    </div>
  );
};

export default Tabs;
