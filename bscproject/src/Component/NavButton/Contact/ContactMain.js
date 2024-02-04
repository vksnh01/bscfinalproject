import React, { useState, useEffect } from "react";
import "./Contact.css";
import "../About/AboutMain.css";
import ContactForm from "./ContactForm";
import LocationMap from "../Home/LocationMap";
import Footer from "../../../Component/Footer/ftr";

const Contact = () => {
  const [ContactData, setContactData] = useState([]);

  useEffect(() => {
    setContactData(data);
  }, []);
  return (
    <>
      <div className="contact-main-div">
        <div className="contact-bg"></div>
        <div className="contact-cards">
          {ContactData.map((elem) => {
            return (
              <>
                <div className="contact-card">
                  <h2>{elem.title}</h2>
                  <p>{elem.describe}</p>
                </div>
              </>
            );
          })}
        </div>
        <ContactForm />
        <LocationMap />
        <Footer />
      </div>
    </>
  );
};
const data = [
  {
    id: 1,
    title: "Address",
    describe: "420 south 21street, delhi road Saharanpur-247452",
  },
  {
    id: 2,
    title: "Contact No.",
    describe: "8868063012",
  },
  {
    id: 3,
    title: "Fax No.",
    describe: "0132-27541",
  },
  {
    id: 4,
    title: "Email Address",
    describe: "BSMSRE@gmail.com",
  },
];
export default Contact;
