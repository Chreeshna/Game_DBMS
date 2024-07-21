import Header from "./Components/Header";
import Home from "./Pages/Home";
import { useState } from "react";
import { Themes } from "./Context/Themes";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  return (
    <Themes.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#272626]" : null
        } min-h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </Themes.Provider>
  );
}

export default App;
