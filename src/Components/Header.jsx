import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/Logo.png";
import { HiSearchCircle, HiMoon, HiOutlineSun } from "react-icons/hi";
import { Themes } from "../Context/Themes";

const Header = () => {
  const [toggle, setToogle] = useState(true);
  const { theme, setTheme } = useContext(Themes);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="Logo" width={80} height={60} />
      <div className="flex bg-slate-200 p-2 w-7/12 items-center mx-auto rounded-full justify-between">
        <HiSearchCircle />
        <input
          type="text"
          placeholder="Search for games, add-ons and mores"
          className="px-2 outline-none bg-transparent w-full"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <HiOutlineSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
