import React from "react";
import { NavLink } from "react-router-dom";
import "./LibraryMain.css";
import "../AccordionLR/Accordion.css";
import Ftr from "../../../Component/Footer/ftr";
// import digital from "../../ImgFolder/digitalLibrary.jpg";
// import bridge from "../../ImgFolder/bridgeLibrary.jpg";
// import higher from "../../ImgFolder/higherLibrary.jpg";
// import DigitalLibrary from "./DigitalLibrary";

const LibraryMain = () => {
  return (
    <>
      <div className="library-main-div">
        <div className="table-main-title">
          <h1>Library</h1>
        </div>
        <div className="library-cards">
          <div className="library-card digital">
            <NavLink to="/library/digitalLibrary">Digital Library</NavLink>
          </div>
          <div className="library-card bridge">
            <a
              href="https://ccsuniversity.ac.in/bridge-library/"
              target="_blank"
              rel="noreferrer"
            >
              Bridge Library
            </a>
          </div>
          <div className="library-card higher">
            <a
              href="https://heecontent.upsdc.gov.in/Home.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Higher Education Library
            </a>
          </div>
        </div>
      </div>
      <Ftr />
    </>
  );
};
export default LibraryMain;
