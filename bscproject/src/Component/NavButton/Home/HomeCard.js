import React, { useEffect, useState } from "react";
import {FcBusinessman,FcLibrary,FcSportsMode,FcGraduationCap} from 'react-icons/fc'

const HomeCard = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
  },[]);

  return (
    <>
    <div className="main-card">
      {cardData.map((elem) => {
        const {id,logo,title,para,classname}=elem;
        return (
          <>
            <div className={`cards ${classname}`}>
            <span>{logo}</span>
              <h1>{title}</h1>
              <p>
               {para}
              </p>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};
const data = [
  {
    id: 1,
    logo: <FcBusinessman />,
    title: "Certified Teachers",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    classname:'odd'
  },
  {
    id: 2,
    logo: <FcGraduationCap />,
    title: "Special Education",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    classname:'even'
  },
  {
    id: 3,
    logo: <FcLibrary />,
    title: "Book & Library",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    classname:'odd'
  },
  {
    id: 4,
    logo: <FcSportsMode />,
    title: "Sport Clubs",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    classname:'even'
  },
];
export default HomeCard;
