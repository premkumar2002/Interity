import React from "react";
import designpa from '../images/designpa.png';
import designpb from '../images/designpb.png';

const Designs = () => {
  return (
    <div className="flex py-36 px-8 space-x-6">
      <div className="w-7/12 pl-[10%] pt-[10%]">
        <h1 className="text-2xl font-semibold pb-7">Unlock Your Design Dreams</h1>
        <p className="font-serif pb-8 pr-12">
          Dive into a world of boundless creativity and design possibilities as
          we showcase over 50 stunningly crafted rooms, each brimming with
          unique styles, color palettes, and decor ideas to ignite your
          imagination and elevate your home to new heights of beauty and
          comfort.
        </p>
        <button className="border bg-lime-800 text-white rounded-md px-3 py-1 bg-opacity-90">
          Get Inspired
        </button>
      </div>

      <div className="w-5/12 flex space-x-2 pr-[1%]">
        <img alt="designpa" src={designpa} className="w-[65%] h-[85%] rounded-lg" />
        <div>
          <img alt="designpb" src={designpb} className="w-[140%] h-[60%] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Designs;
