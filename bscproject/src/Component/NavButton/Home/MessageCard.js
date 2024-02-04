import React, { useState } from "react";
import {NavLink } from 'react-router-dom'
import img from "../../ImgFolder/img3.jpg";
import MessageMain from "../Message/MessageMain";

const MessageCard = () => {
  const [checkPopUp, setCheckPopUp] = useState(false);

  return (
    <>
      <div className="message-card-main-div">
        <div className="msg-img-div">
          <img src={img} alt="" />
        </div>
        <div className="msg-text-div">
          <h1>Message</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            eaque aliquid ipsum voluptates, aperiam soluta illum rem nisi!
            Debitis fugit exercitationem veniam corporis earum. Cumque, autem
            quaerat eum sunt culpa aperiam amet quo enim, esse consequuntur et
            nisi ratione animi architecto, necessitatibus corporis. Labore optio
            ducimus culpa? Qui, perspiciatis at.
            <NavLink to='/msg' className="btn" onClick={()=>{setCheckPopUp(true)}}>Read More</NavLink>
          </p>
        </div>
      </div>
      <div
       className={(checkPopUp)? 'open':'close'}
       id="msg-id"
       >
        <MessageMain bool={checkPopUp}/>
      </div>
    </>
  );
};
export default MessageCard;
