import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../ImgFolder/mother1.jpg";


const AboutStudent =()=>{

    return(<>
<div className="about-student-main">
          <div className="about-student-div">
            <h1>Student says About us</h1>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
          <Carousel controls={false}>
            <Carousel.Item interval={1000}>
              <div className="about-student-card">
                <img src={img1} alt="" />
                <div className="about-student-card-para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, quas?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quis, quas?
                  </p>
                  <p style={{ "font-weight": "500" }}>Arena</p>
                  <p style={{ color: "rgb(179 14 14)" }}>Sister</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div className="about-student-card">
                <img src={img1} alt="" />
                <div className="about-student-card-para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, quas?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quis, quas?
                  </p>
                  <p style={{ "font-weight": "500" }}>Arena</p>
                  <p style={{ color: "rgb(179 14 14)" }}>Sister</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="about-student-card">
                <img src={img1} alt="" />
                <div className="about-student-card-para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, quas?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quis, quas?
                  </p>
                  <p style={{ "font-weight": "500" }}>Arena</p>
                  <p style={{ color: "rgb(179 14 14)" }}>Sister</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

    </>)
}
export default AboutStudent;