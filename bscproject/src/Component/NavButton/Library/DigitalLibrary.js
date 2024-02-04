import React from "react";
import { NavLink } from "react-router-dom";
import data from "./DigitalLibraryData";
import Ftr from "../../../Component/Footer/ftr";

const DigitalLibrary = ({ props }) => {
  const [digitalData, setDigitalData] = React.useState([]);
  const [checkClass, setCheckClass] = React.useState(props);

  React.useEffect(() => {
    setDigitalData(data);
  }, []);
  const closeDigitalLibrary = () => {
    setCheckClass(!checkClass);
  };
  return (
    <>
      <div
        className="library-main-div digital-main-div"
        id={!checkClass && "close"}
      >
        <div className="table-main-title">
          <h1>Digital Library</h1>
          <NavLink className="Cbtn" onClick={closeDigitalLibrary} to="/library">
            Close
          </NavLink>
        </div>
        <div className="library-cards">
          {digitalData.map((elem) => {
            const { img, title, desc, link, first, linkName } = elem;
            console.log(elem.d);
            return (
              <>
                <div className="library-card-div">
                  <img src={img} alt="" />
                  <div className="library-card-text-div">
                    <h2>{title}</h2>
                    <p>
                      {first}
                      <a href={link} target="_blank" rel="noreferrer">
                        {linkName}
                      </a>
                      {desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Ftr />
      </div>
    </>
  );
};

export default DigitalLibrary;
