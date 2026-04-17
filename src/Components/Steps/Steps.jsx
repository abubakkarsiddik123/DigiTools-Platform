import React from 'react';
import UserImg from '../../assets/banner/user.png'
import RocketImg from '../../assets/banner/rocket.png'
import PackageImg from '../../assets/banner/package.png'
const Steps = () => {
    return (
         <div className="bg-[#F9FAFC] ">
          <div className="  max-w-[1200px] mx-auto  py-16  text-center ">
      <h2 className="text-5xl font-extrabold mb-4">Get Started In 3 Steps</h2>
      <p className="text-[#627382] mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="  flex flex-wrap justify-center gap-5">
        
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md w-96 relative">
          <div className="flex justify-end p-4">
            <p className=' text-white px-2 py-1 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>01</p>
          </div>

          <div className="card-body items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <img className='w-14' src={UserImg} alt="" />
            </div>

            <h3 className=" text-2xl text-[#101727] font-bold ">Create Account</h3>
            <p className=" text-[#627382] ">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
        </div>

        {/* Card 2 */}
      <div className="card bg-base-100 shadow-md w-96 relative">
          <div className="flex justify-end p-4">
            <p className=' text-white px-2 py-1 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>02</p>
          </div>

          <div className="card-body items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <img className='w-14' src={PackageImg} alt="" />
            </div>

            <h3 className=" text-2xl text-[#101727] font-bold ">Choose Products</h3>
            <p className=" text-[#627382] ">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md w-96 relative">
          <div className="flex justify-end p-4">
            <p className=' text-white px-2 py-1 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>03</p>
          </div>

          <div className="card-body items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <img className='w-14' src={RocketImg} alt="" />
            </div>

            <h3 className=" text-2xl text-[#101727] font-bold ">Start Creating</h3>
            <p className=" text-[#627382] ">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>

      </div>
    </div>
         </div>
  );
    
};

export default Steps;