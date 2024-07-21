import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiClipboardList,
} from "react-icons/hi";

const GenreList = ({ genreId, selectedGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  });

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="dark:text-white w-[25%] h-full p-4 flex-col gap-2 white hidden lg:flex">
        <div className="h-[55%] rounded flex flex-col justify-around">
          <div className="h-[85%] rounded">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiOutlineHome className="w-8" />
                <p className="font-semibold">Home</p>
              </div>
            </div>
          </div>
          <div className="h-[85%] rounded relative">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiClipboardList className="w-8" />
                <h2
                  className="font-semibold cursor-pointer"
                  onClick={handleDropdownToggle}
                >
                  Genre
                </h2>
                {showDropdown && (
                  <ul
                    className="absolute top-full left-0 w-full"
                    style={{ width: "300px" }}
                  >
                    {genreList.map((item, index) => (
                      <li key={item.id} className="px-4 py-2">
                        <div
                          onClick={() => {
                            setActiveIndex(index);
                            genreId(item.id);
                            selectedGenresName(item.name);
                          }}
                          className={`flex gap-2 group items-center mb-2 cursor-pointer hover:bg-[#7566c966] p-4 rounded-2xl
                            ${
                              activeIndex == index
                                ? "bg-gray-300 dark:bg-[#7566c966]"
                                : null
                            }`}
                        >
                          <img
                            src={item.image_background}
                            className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300"
                          />
                          <h3 className="ml-2 text-[16px] group-hover:font-bold  transition-all ease-out duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreList;
