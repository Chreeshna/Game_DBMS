import React, { useEffect } from "react";

const Store = ({ gameBanner }) => {
  useEffect(() => {});
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-8 bg-gradient-to-t from-[#7566c966] to-transparent w-full">
        <h2 className="text-white text-[24px] font-bold">{gameBanner.name}</h2>
        <button className="px-4 py-3 text-white bg-[#7566c966]">
          Read More
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-[350px] rounded-2xl w-full object-cover"
      />
    </div>
  );
};

export default Store;
