import React from "react";
import "./gallery.css";
import img from "../../ImgFolder/bridgeLibrary.jpg";
import Footr from "../../../Component/Footer/ftr";
import img1 from "../../ImgFolder/about1.jpg";
import img2 from "../../ImgFolder/img1.jpg";
import img3 from "../../ImgFolder/img2.jpg";
import img4 from "../../ImgFolder/img3.jpg";
import img5 from "../../ImgFolder/img4.jpg";
import img6 from "../../ImgFolder/img5.jpg";

const Gallery = () => {
  const [imgData, setImgData] = React.useState([]);
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setImgData(data);
    console.log(data.url);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="gallery-main-div">
        <div className="img-card">
          <img src={img6} alt="" />
        </div>
        <div className="img-card">
          <img src={img1} alt="" />
        </div>
        <div className="img-card">
          <img src={img2} alt="" />
        </div>
        <div className="img-card">
          <img src={img3} alt="" />
        </div>
        <div className="img-card">
          <img src={img4} alt="" />
        </div>
        <div className="img-card">
          <img src={img5} alt="" />
        </div>
        {/* {imgData.map((elem) => {
          return (
            <>
              <div className="img-card">
                <img className="img" src={elem.url} alt="" />
                <img src={img} alt="" />
              </div>
            </>
          );
        })} */}
      </div>
      <Footr />
    </>
  );
};
export default Gallery;
