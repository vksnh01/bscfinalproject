import React from "react";
import "./StudentMain.css";
import data from "./StudentNavData";
import { NavLink, Route, Routes } from "react-router-dom";

const StudentNavBar = () => {
    const [StudentNavData, setStudentNaData] = React.useState([]);

    React.useEffect(() => {
      setStudentNaData(data);
    }, []);

  return (
    <>
      <div className="student-main-div">
      <div className="student-nav">
        <ul>
          {StudentNavData.map((elem) => {
            const { id, name, path } = elem;
            return (
              <>
                <li>
                  <NavLink activeClassName="acitve" key={id} exact to={path}>
                    {name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      </div>
    </>
  );
};
export default StudentNavBar;
