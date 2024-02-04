import React from "react";
import CarouselImg from "./CarouselImg";
import HomeCard from "./HomeCard";
import Offer from "./Offer";
import LocationMap from "./LocationMap";
import AboutCard from "./AboutCard";
import Footers from "../../../Component/Footer/ftr.js";
import MessageCard from "./MessageCard";
import WelcomeCard from "./WelcomeCard";
import img1 from "../../ImgFolder/img1.jpg";
import img2 from "../../ImgFolder/img2.jpg";
import img3 from "../../ImgFolder/img3.jpg";
import "./Home.css";

const HomeMain = () => {
  // const [ImageData, setImageData] = React.useState([]);
  // React.useEffect(() => {
  //   setImageData(ImageData);
  // }, []);

  return (
    <>
      <CarouselImg img1={img1} img2={img2} img3={img3} w={"100%"} h={"85vh"} />
      <WelcomeCard />
      <HomeCard />
      <MessageCard />
      <Offer />
      <AboutCard />
      <LocationMap />
      <Footers />
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
export default HomeMain;
