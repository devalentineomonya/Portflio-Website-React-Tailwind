import React from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";
import NavbarMain from "./components/1Navbar/NavbarMain";
import Main from "./pages/Main";
const App = () => {
  return (
    <>
      <NavbarMain />
      <Main />
    </>
  );
};

export default App;
