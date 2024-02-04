import React from "react";
import "./AboutMain.css";
import Footer from "../../../Component/Footer/ftr";
import about1 from "../../ImgFolder/about1.jpg";
import about2 from "../../ImgFolder/about2.jpg";
import about3 from "../../ImgFolder/about3.jpg";
import about4 from "../../ImgFolder/about4.jpg";

import AboutDetail from "./AboutDetail";
import AboutContent from "./AboutContent";
import AboutStudent from "./AboutStudent";

const About = () => {
  const [imgD, setImgD] = React.useState([]);
  React.useEffect(() => {
    setImgD(imgData);
  }, []);
  return (
    <>
      <div className="about-main-div">
        <div className="about-bg">
          <h1>About us</h1>
        </div>
        <AboutDetail />
        <AboutContent />
        <AboutStudent />
        <div className="about-images">
          {imgD.map((elem) => {
            return (
              <>
                <img src={elem.img} alt={elem.name} key={elem.id} />
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
const imgData = [
  {
    id: 1,
    img: about1,
    name: "img1",
  },
  {
    id: 2,
    img: about2,
    name: "img1",
  },
  {
    id: 3,
    img: about3,
    name: "img1",
  },
  {
    id: 4,
    img: about4,
    name: "img1",
  },
];
export default About;
