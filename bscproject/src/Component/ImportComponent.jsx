import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./HeaderFolder/header";
import Navbar from "./HeaderFolder/NavBar";
import Ftr from "./Footer/ftr";

const ImportComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        {/* <Ftr /> */}
      </BrowserRouter>
    </>
  );
};
export default ImportComponent;
