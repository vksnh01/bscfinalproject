import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "./Home.css";

const CarouselImg = ({ img1, img2, img3, w, h }) => {
  return (
    <>
  <div className="main-carousel-div slides" style={{"height":h}}>
      <div className="slide slide-1 absolute" style={{"height":h}}>
        <img src={img1} alt="" style={{"height":h,"width":w}}/>
      </div> 
       <div className="slide slide-2 absolute" style={{"height":h}}>
        <img src={img2} alt="" style={{"height":h,"width":w}}/> 

       </div>
       <div className="slide slide-3 absolute" style={{"height":h}}>
        <img src={img3} alt="" style={{"height":h,"width":w}}/> 

      </div> 

      </div>


 {/* <Carousel controls={false}>
        <Carousel.Item
          interval={1000}
          style={{ width: w, height:h }}
          classNameName="img-div"
        >
          <img src={img1} alt="img" style={{ width: w , height:h }} />
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ width: w, height:h }}
          classNameName="img-div"
        >
          <img src={img2} alt="img" style={{ width:w, height:h}} />
        </Carousel.Item>
        <Carousel.Item
          classNameName="img-div"
          style={{ width:w, height:h}}
        >
          <img src={img3} alt="img" style={{ width: w, height:h}} />
        </Carousel.Item>
      </Carousel>  */}
    </>
  );
};

export default CarouselImg;
