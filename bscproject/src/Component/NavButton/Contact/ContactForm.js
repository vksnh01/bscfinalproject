import React from "react";
import formImg from "../../ImgFolder/contact-form.jpg";
import { redirect } from 'react-router-dom';
// const pth from '../../Home/HomeMain'

const ContactForm = () => {

  const [contactData, setContactData] = React.useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const inputHandle = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  const SubmitFormHadle = async (e) => {
    e.preventDefault();
    const { name, email, number, subject, message } = contactData;
    const res = await fetch("/contacts", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        subject,
        message,
      }),
    });
    const resData = await res.json();
    if (resData.status === 404 || !resData) {
      window.alert("registration failed");
      console.log("Failled");
      return redirect('./ContactMain')
    } else {
      alert("registration successfull");
      return redirect('../Home.HomeMain')
    }
  };

  return (
    <>
      <div className="contact-form-div">
        <div className="form-left-side">
          <img src={formImg} alt="form" />
        </div>
        <div className="form-right-side">
          <h2>Leave message</h2>
          <form method="POST"   onSubmit={SubmitFormHadle}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
              onChange={inputHandle}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your Email"
              onChange={inputHandle}
            />
            <input
              type="number"
              name="number"
              id=""
              placeholder="Enter your number"
              onChange={inputHandle}
            />
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject"
              onChange={inputHandle}
            />
            <textarea
              name="message"
              id=""
              cols="40"
              rows="5"
              placeholder="message"
              onChange={inputHandle}
            ></textarea>
            <input
              type="submit"
              value="Submit Now"
            
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
