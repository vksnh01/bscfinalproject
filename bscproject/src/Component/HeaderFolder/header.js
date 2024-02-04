import React, { useState } from "react";
import "./HeaderAll.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { ImTelegram } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const Header = () => {
  var time = new Date().toLocaleTimeString();
  const [curTime, setCurTime] = useState(time);
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setCurTime(time);
  }, 1000);
  return (
    <>
      <div className="main_header">
        <div className="left_header">
          <p>
            <BsFillTelephoneFill className="close" /> +91-8868063012{" "}
            <span className="close">|</span>
          </p>
          <p>
            <TbDeviceLandlinePhone className="close" /> 0132-25456
          </p>
        </div>
        <div className="right_header">
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <BsFacebook className="fb" />
          </a>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
            <BsInstagram className="insta" />
          </a>
          <a href="https://www.telegram.com" rel="noreferrer" target="_blank">
            <ImTelegram className="tele" />
          </a>
          <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
            <BsTwitter className="tweet" />
          </a>
          <a href="https://www.gmail.com" rel="noreferrer" target="_blank">
            <SiGmail className="mail" />
          </a>
        </div>
        <div className="time">
          <p>{curTime}</p>
        </div>
      </div>
    </>
  );
};
export default Header;
