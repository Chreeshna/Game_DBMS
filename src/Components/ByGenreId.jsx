import React, { useEffect } from "react";

const ByGenreId = ({ gameList, selectedGenresName }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenresName} Game
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-5">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="bg-[#7566c966] p-1 pb-12 h-full rounded-2xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-2xl object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
            </h2>
            <h2 className="text-gray-500 dark:text-gray-200">
              <span style={{ marginRight: "8px" }}>{"⭐ " + item.rating}</span>
              {"🗨️ " + item.reviews_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByGenreId;
