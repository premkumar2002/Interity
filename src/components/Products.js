import React from "react";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";

const Products = () => {
  return (
    <div className="p-12 pb-28 pt-16 bg-gray-100">
      <h2 className="text-2xl">Our Products</h2>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Discover Our Impressive Range</h1>
        <button className="border bg-lime-800 text-white rounded-md px-3 py-1 bg-opacity-90">
          Shop Now
        </button>
      </div>

      <div className="flex pt-4 space-x-4">
        <div className="w-full space-y-4">
          <div className="relative">
            <img alt="p1" src={p1} className="rounded-lg w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-50 p-3 rounded-b-lg">
              <h3 className="text-lg font-bold">Modern Linen Sofa</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  Contemporary linen sofa with clean lines and plush cushions, perfect for both style and comfort in your living room.
                </p>
                <p className="font-extrabold">$899</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img alt="p2" src={p2} className="rounded-lg w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-50 p-3 rounded-b-lg">
              <h3 className="text-lg font-bold">Extendable Oak Dining Tables</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  Elegant oak dining table that extends to accommodate extra guests, ideal for hosting dinner parties and family gatherings.
                </p>
                <p className="font-extrabold">$699</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="relative">
            <img alt="p3" src={p3} className="rounded-lg w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-50 p-3 rounded-b-lg">
              <h3 className="text-lg font-bold">Mid-Century Modern Armchair</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  Iconic mid-century modern armchair with a sleek silhouette and upholstered cushions, adding a touch of retro flair to any room.
                </p>
                <p className="font-extrabold">$399</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img alt="p4" src={p4} className="rounded-lg w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-50 p-3 rounded-b-lg">
              <h3 className="text-lg font-bold">Tufted Velvet Bed Frame</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  Luxurious velvet bed frame featuring a tufted headboard and sturdy wooden slats for a stylish bedroom centerpiece.
                </p>
                <p className="font-extrabold">$999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
