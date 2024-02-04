import React from "react";
import data from "./StudentNavData";
// import { NavLink, Route, Routes,BrowserRouter } from "react-router-dom";
import "./StudentMain.css";
import StudentNavBar from "./StudentNavBar";
import Footer from "../../../Component/Footer/ftr";
import CarouselImg from "../Home/CarouselImg";
import img1 from "../../ImgFolder/std1.jpg";
import img2 from "../../ImgFolder/std2.jpg";
import img3 from "../../ImgFolder/std3.jpg";

const StudentMain = () => {
  const [StudentNavData, setStudentNaData] = React.useState([]);

  React.useEffect(() => {
    setStudentNaData(data);
  }, []);

  return (
    <>
      <div className="student-main-div">
        <StudentNavBar />
      </div>
      <CarouselImg img1={img1} img2={img2} img3={img3} w={"100%"} h={"80vh"} />
      <Footer />
    </>
  );
};
const imgData = [
  {
    id: 1,
    src: img1,
    inter: 1000,
  },
  {
    id: 2,
    src: img2,
    inter: 1000,
  },
  {
    id: 3,
    src: img3,
    inter: 1000,
  },
];
export default StudentMain;
