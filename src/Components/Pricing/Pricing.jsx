import { MdCheck } from "react-icons/md";

const Pricing = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#101727] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Starter */}
          <div className="card bg-[#F9FAFC] border border-[#F2F2F2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body p-6 flex flex-col justify-between h-full">

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#101727]">Starter</h2>
                  <p className="text-[#627382] text-sm">Perfect for getting started</p>
                </div>

                <div>
                  <span className="text-5xl font-bold text-[#101727]">$0</span>
                  <span className="text-[#627382] ml-1">/month</span>
                </div>

                <ul className="space-y-3 pt-4 text-[#101727]">
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Access to 10 free tools
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Basic templates
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Community support
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    1 project per month
                  </li>
                </ul>
              </div>

              <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold mt-6 hover:opacity-90">
                Get Started Free
              </button>

            </div>
          </div>

          {/* Pro */}
          <div className="card bg-violet-600 text-white shadow-xl scale-105 relative">
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="badge badge-warning px-4 py-1 font-medium">
                Most Popular
              </div>
            </div>

            <div className="card-body p-6 flex flex-col justify-between h-full">

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold">Pro</h2>
                  <p className="opacity-80 text-sm">Best for professionals</p>
                </div>

                <div>
                  <span className="text-5xl font-bold">$29</span>
                  <span className="opacity-80 ml-1">/month</span>
                </div>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Access to all premium tools
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Unlimited templates
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Priority support
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Unlimited projects
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Cloud sync
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck />
                    Advanced analytics
                  </li>
                </ul>
              </div>

              <button className="w-full py-3 rounded-full bg-white text-violet-600 font-semibold mt-6 hover:opacity-90">
                Start Pro Trial
              </button>

            </div>
          </div>

          {/* Enterprise */}
          <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body p-6 flex flex-col justify-between h-full">

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#101727]">Enterprise</h2>
                  <p className="text-[#627382] text-sm">For teams and businesses</p>
                </div>

                <div>
                  <span className="text-5xl font-bold text-[#101727]">$99</span>
                  <span className="text-[#627382] ml-1">/month</span>
                </div>

                <ul className="space-y-3 pt-4 text-[#101727]">
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Team collaboration
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Custom integrations
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Dedicated support
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    SLA guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <MdCheck className="text-green-500" />
                    Custom branding
                  </li>
                </ul>
              </div>

              <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold mt-6 hover:opacity-90">
                Contact Sales
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;