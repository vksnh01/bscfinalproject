import React,{useEffect, useState} from "react";
import {NavLink} from 'react-router-dom'
import "./Message.css";
// import img from "../../ImgFolder/img1.jpg";
import president from '../../ImgFolder/president.jpg';
import secretray from '../../ImgFolder/secretary.jpg';
import principal from '../../ImgFolder/principal.jpg';

const MessageMain = ({bool}) => {
  const [cardData,setCardData]=useState([]);
  const [checkPopUp, setCheckPopUp] = useState(bool);
useEffect(()=>{
  setCardData(data);
},[])
  return (
    <>
      <div
      className={(checkPopUp)?'close':'message-main-div'}>
        <div className="title-card">
          <h1>Messages</h1>
        </div>
        <div className="message-card">
        {
          cardData.map((elem)=>{
            const {img,title,description,name}=elem;
            return(<>
              <div className="message-img-div">
            <img src={img} alt="" />
          </div>
          <div className="message-text-div">
            <h2>{title}</h2>
            <p>
             {description}<span style={{"font-weight":"bold","float":"right"}}>{name}</span>
            </p>
          </div>
            </>)
          })
        }
        </div>
        
        <NavLink to="/" className="close-btn" onClick={()=>{setCheckPopUp(!checkPopUp)}}>Close</NavLink>
      </div>

      
    </>
  );
};


const data =[
  {
    img:president,
    title:"President's Message",
    name:"Mr. Devid can",
    description: 'Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories anMessage of President d highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world. Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories and highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world.'
   
  },
  {
    img:secretray,
    title:"Secretary's Message",
    name:"Mr. John Mask",
    description: 'Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories anMessage of President d highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world. Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories and highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world.'
  },
  {
    img:principal,
    title:"Principal's Message",
    name:"Mrs. Luccy Jenifer",
    description: 'Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories anMessage of President d highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world. Gochar Mahavidyalaya established in 1959 has been continuously engaged in creation and dissemination of world class knowledge by involving all the stake-holders, i.e., students, teachers, supporting staff and the people from different walks of the society. Over the years, it has steadily evolved itself as one of the leading centers of comprehensive learning with its exposure to and linkages with the peers at national and international levels. With its state of the art infrastructure, well equipped laboratories and highly qualified and dedicated faculty, the college is committed to the task of harnessing and cultivating the capabilities of young students with a view to enabling them to carve suitable space for themselves in the modern  world.'
  },
];
export default MessageMain;