import React, { useEffect } from "react";
import "./App.css";
import NavbarMain from "./components/common/1Navbar/NavbarMain";

import Home from "./pages/Home";
const App = () => {
  const screenWidth = window.innerWidth;

  const getNavComponent = () => {
    if (screenWidth < 992) {
      return <h1>No set</h1>;
    } else {
      return <NavbarMain />;
    }
  };
  console.log(getNavComponent())

  return (
    <>
      {getNavComponent()}
      <Home />
    </>
  );
};

export default App;
