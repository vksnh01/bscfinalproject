import React from "react";
import './Home.css'
import logo from '../../ImgFolder/logo.jpg'


const WelcomeCard =()=>{

    return(<>
 <div className="welcome-main-card">
        <div className="welcome-card">
            <span><img src={logo} alt="logo" />Welcome to Saheed Bhagat Singh College</span>
 </div>
 {/* <marquee 
 className="welcome-card"
 direction="left">
             <span><img src={logo} alt="logo" />Welcome to Saheed Bhagat Singh College</span>
 </marquee> */}
        </div>
    </>)
}
export default WelcomeCard;