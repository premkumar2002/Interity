import React from "react";

const Subscription = () => {
  return (
    <div>
      <div className="bg-lime-900 text-white text-center rounded-xl lg:mx-[26%] lg:my-[7%] m-[10%] lg:p-[4%] p-[6%]">
        <h1 className="text-3xl font-semibold pb-6">
          Subscribe and Earn 30% Off
        </h1>
        <h4 className="font-thin">
          Discover new arrivals and inspiration, plus get 15% off your first
          order
        </h4>
        <h4 className="font-thin pb-6">on full-priced items.</h4>
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-white rounded w-[43%] p-2 bg-lime-900"
        />
        <button className="rounded bg-white text-lime-900 p-2 px-6 ml-4">
          SUBSCRIBE
        </button>
      </div>
      <hr></hr>
      <footer className="px-10 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Interity</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              400 University Drive <br></br>
              Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm text-gray-500">Links</h3>
            <nav className="flex flex-col space-y-3 font-bold">
              <a href="/" className="text-sm hover:underline">
                Home
              </a>
              <a href="/shop" className="text-sm hover:underline">
                Shop
              </a>
              <a href="/about" className="text-sm hover:underline">
                About
              </a>
              <a href="/contact" className="text-sm hover:underline">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm text-gray-500 ">Help</h3>
            <nav className="flex flex-col space-y-3 font-bold">
              <a href="/payment" className="text-sm hover:underline">
                Payment Options
              </a>
              <a href="/returns" className="text-sm hover:underline">
                Returns
              </a>
              <a href="/privacy" className="text-sm hover:underline">
                Privacy Policies
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm text-gray-500">Newsletter</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 ">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-grow py-2 text-sm underline decoration-2"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm lg:ml-4 underline decoration-2	 font-semibold"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-semibold">
            2024 Interity all rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Subscription;
