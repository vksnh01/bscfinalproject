import React from "react";
import { NavLink } from "react-router-dom";

const AboutCard = () => {
  return (
    <>
      <div className="home-about-cards">
        <div className="title-cards">
          <h1>About Us</h1>
        </div>
        <div className="heading">
          <h2>Among the top 10 colleges in the city</h2>
        </div>
        <div className="para-card">
          <p>
            Quaerat voluptatibus facilis aliquam, totam accusantium, illum
            voluptatem architecto cumque adipisci optio reiciendis commodi.
            Labore fuga, temporibus eum similique odit deleniti, quo voluptates
            quia voluptatum minus ipsum eius sed! Tempore cumque consequuntur
            eligendi error neque reiciendis sint dicta aliquid, eaque dicta
            asperiores doloribus accusantium sapiente at repellat. Eos nobis
            dolores quam placeat necessitatibus eveniet velit consectetur non
            error, maiores neque corrupti! Labore at vero facere suscipit
            blanditiis corrupti, dolore nostrum sapiente libero voluptatem.
            Laboriosam aut laudantium eius odio magnam debitis numquam ea minima
            harum repellat! Architecto, sequi voluptas possimus nesciunt
            sapiente sunt amet alias aut soluta, ducimus quos debitis commodi
            minus neque hic id! Velit{" "}
            <NavLink to="/about">read more...</NavLink>
          </p>
        </div>
        {/* <div className="video-section">
          <VideoFile />
        </div> */}
      </div>
    </>
  );
};
export default AboutCard;
