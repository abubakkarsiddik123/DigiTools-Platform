import React from "react";
import BannerImg from "../../assets/banner/banner.png";
import PlayImg from "../../assets/banner/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="hero mt-10 lg:mt-20  max-w-[1200px] mx-auto px-4">
        <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
          <img src={BannerImg}  alt="Banner image" />
          <div className="space-y-4">
            <div className="inline-flex items-center  gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_#7c3aed]"></span>
              New: AI-Powered Tools Available
            </div>
            <h1 className=" text-5xl lg:text-7xl font-semibold leading-snug md:leading-tight lg:leading-[5rem] text-[#101727]">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="leading-6 max-w-xl text-[#627382] ">
              Access premium AI tools, design assets, templates, and
              productivity <br/> software—all in one place. Start creating faster
              today. <br/> Explore Products.
            </p>
            <div className="flex gap-4">
              <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-4 text-white rounded-full">
                Explore Products
              </button>
              <button className="  btn btn-outline hover:bg-gradient-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white  rounded-full ">
                <img src={PlayImg} alt="PlayImg" />
                <span className="font-bold text-md bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text hover:text-white ">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
