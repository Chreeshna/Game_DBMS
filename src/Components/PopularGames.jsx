import React, { useEffect } from "react";

const PopularGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-6">
      <h2 className="font-bold text-[30px] dark:text-white">Popular Games</h2>
      <div className="hidden md:grid md:grid-cols-3 gap-4 mt-12 lg:grid-cols-5">
        {gameList.map(
          (item, index) =>
            index < 5 && (
              <div
                key={index}
                className="bg-[#7566c966] rounded-lg p-1 text-center"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white p-4 text-[16px] font-bold">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PopularGames;
