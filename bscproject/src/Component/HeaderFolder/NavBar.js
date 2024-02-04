import React, { useState } from "react";
import { Routes, NavLink, Route,redirect } from "react-router-dom";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import logo from "../ImgFolder/logo.jpg";
import MessageMain from "../NavButton/Message/MessageMain";
import Error from "../ERROR/error";
import NavData from "./NavbarData";
import StudentData from "../NavButton/Student/StudentNavData";
import "./Nav.css";
import DigitalLibrary from "../NavButton/Library/DigitalLibrary";

const Navi = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [naviData, setNaviData] = useState([]);
  const [StudentNavData, setStudentNavData] = React.useState([]);

  React.useEffect(() => {
    setNaviData(NavData);
    setStudentNavData(StudentData);
  }, []);

  return (
    <>
      <nav className="navbar-main-div">
        <div className="logo">
          <img src={logo} alt="logo" />
          {/* <label htmlFor="#">Design</label> */}
        </div>
        <ul className={!navOpen ? "hide" : "show"}>
          {naviData.map((elem) => {
            const { name, path } = elem;
            return (
              <>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={path}
                    onClick={() => setNavOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <span
          id="bar"
          href="#"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          {!navOpen ? <FaBars /> : <FaChevronLeft />}
        </span>
      </nav>
      <section></section>

      <Routes>
        {naviData.map((elem) => {
          const { element, path } = elem;
          return (
            <>
              <Route exact path={path} element={element} />
            </>
          );
        })}
        {StudentNavData.map((elem) => {
            return (
              <>
                <Route exact path={elem.path} element={elem.element} />
              </>
            );
          })}
         
        <Route path="*" element={<Error />} />
        <Route path="/msg" element={<MessageMain />} />
        <Route
          path="/library/digitalLibrary"
          element={<DigitalLibrary props={true} />}
        />
      </Routes>
    </>
  );
};

export default Navi;
