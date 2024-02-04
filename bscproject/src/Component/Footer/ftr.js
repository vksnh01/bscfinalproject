import React from "react";
import './ftr.css'

const uttaranchal =
  "https://www.uudoon.in/?utm_source=Google&utm_medium=Online&utm_campaign=General_Google_Search_2023";
const ccsu = "https://www.ccsuniversity.ac.in/ccsum/";
const msu = "https://msuniversity.ac.in/";
const dhe =
  "https://www.india.gov.in/directorate-higher-education-department-uttar-pradesh";
const ups = "https://scholarship.up.gov.in/";

const Footers = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="footer-facility">
            <h1 className="footer-title">Facilites</h1>

            <ul>
              <li>
                <a href="#" rel="noreferrer">Hostel</a>
              </li>
              <li>
                <a href="#" rel="noreferrer">Library</a>
              </li>
              <li>
                <a href="#" rel="noreferrer">Computer Lab</a>
              </li>
              <li>
                <a href="#" rel="noreferrer">Dispensary</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="footer-title">Important Links</h1>
            <ul>
              <li>
                <a href={msu} target="_blank" rel="noreferrer">
                  Maa Shakumbhari University
                </a>
              </li>
              <li>
                <a href={ccsu} target="_blank" rel="noreferrer">
                  CCS University
                </a>
              </li>
              <li>
                <a href={uttaranchal} target="_blank" rel="noreferrer">
                  Uttranchal University
                </a>
              </li>
              <li>
                <a href={dhe} target="_blank" rel="noreferrer">
                  Directorate of Higher Education
                </a>
              </li>
              <li>
                <a href={ups} target="_blank" rel="noreferrer">
                  UP Schlorship
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-c footer">
            <h1 className="footer-title">Contact us</h1>
            <p>
              <span>
                Gochar Mahaidyalaya, Rampur maniharan
                <br />
                Saharanpur-247451(UP),India
              </span>
              <br />
              <span>Phone No.: +91-9991-352908</span>
              <br />
              <span>Fax No.: +91-0132-123456</span>
              <br />
              <span>Mobile No.: +91-8868063012</span>
              <br />
              <span>Email.: xyz@gmail.com</span>
              <br />
            </p>
          </div>
        </div>
        <div className="footer-down">
          <p>
            Copyright © 2023 Saheed Bhagat Singh College, rampur maniharan, saharanpur || Developed By Vikrant Sharma
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footers;
