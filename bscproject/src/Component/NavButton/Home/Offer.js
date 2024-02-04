import React, { useState, useEffect } from "react";
import img5 from "../../ImgFolder/img5.jpg";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import {MdOutlineSportsCricket} from 'react-icons/md';
import {GiPuzzle,GiTeacher} from 'react-icons/gi'
import {PiChalkboardTeacherLight} from 'react-icons/pi'
import {GrCertificate} from 'react-icons/gr'

const Offer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(offerData);
  },[]);
  return (
    <>
      <div className="offer-main-div">
        <div className="offer-left-div">
          <div className="offer-title">
            <h1>what we offer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              illum tenetur hic incidunt unde voluptatibus ipsum sapiente
              explicabo quidem. Adipisci ad incidunt excepturi reiciendis{" "}
            </p>
          </div>
          <div className="offer-cards">
          {data.map((elem) => {
            const {logo,title,content}=elem;
            return (
              <>
                <div className="offer-card">
                  <span>
                   {logo}
                  </span>
                  <div className="offer-card-content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                  </div>
                </div>
              </>
            );
          })}
          </div>
        </div>
        <div className="offer-right-div">
          <img src={img5} alt="pics" />
        </div>
      </div>
    </>
  );
};
export default Offer;

const offerData = [
  {
    logo: <AiOutlineSafetyCertificate className="icon" />,
    title: "Safety First",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
  {
    logo: <PiChalkboardTeacherLight className="icon" />,
    title: "Regular Classes",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
  {
    logo: <GrCertificate className="icon" />,
    title: "Certified Teachers",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
  {
    logo: <GiTeacher className="icon" />,
    title: "Sufficient Classrooms",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
  {
    logo: <GiPuzzle className="icon" />,
    title: "Creative Leassons",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
  {
    logo: <MdOutlineSportsCricket className="icon" />,
    title: "Sports Facilities",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Lorem ipsum dolor sit amet.",
  },
];
