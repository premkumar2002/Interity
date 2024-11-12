import React from "react";
import home_cover from "../images/home_cover.png";

const Home = () => {
  return (
    <div className="relative text-center">
      <img src={home_cover} alt="homecover" className="w-full h-screen object-cover" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center md:mb-[20%] sm:mb-[27%]">
        <h1 className="text-4xl font-bold font-serif">Discover Your Perfect Piece of</h1>
        <h1 className="text-4xl font-bold pb-4 font-serif">Furniture</h1>
        <p className="font-sans-serif pb-4 text-sm">
          Explore our wide selection of high-quality furniture for every room in
          your home.
        </p>
        <button className="border bg-lime-800 text-white rounded-md px-3 py-1 bg-opacity-90">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;