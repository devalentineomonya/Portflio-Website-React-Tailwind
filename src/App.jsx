import React from "react";
import "./App.css";
import NavbarMain from "./components/common/1Navbar/NavbarMain";

import Home from "./pages/Home";
const App = () => {
  const browserWidth = () =>  window.innerWidth;

  return (
    <>
    <button className="absolute top-40 bg-green-300 px-40 py-2 " onClick={browserWidth()}>{browserWidth()}</button>
      <NavbarMain />
      <Home />
    </>
  );
};

export default App;
