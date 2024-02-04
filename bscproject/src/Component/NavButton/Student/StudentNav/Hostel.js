import React from "react";
import StudentNavBar from "../StudentNavBar";
import CarouselImg from "../../Home/CarouselImg";
import Footer from "../../../Footer/ftr";
import img1 from "../../../ImgFolder/pexels-andrea-davis-13966978.jpg";
import img2 from "../../../ImgFolder/pexels-george-pak-7969102.jpg";
import img3 from "../../../ImgFolder/pexels-ketut-subiyanto-4907208.jpg";
import power from "../../../ImgFolder/power.png";
import room from "../../../ImgFolder/room.png";
import gs from "../../../ImgFolder/gs.png";
import rr from "../../../ImgFolder/rr.png";
import canteen from "../../../ImgFolder/canteen.png";
import saloon from "../../../ImgFolder/saloon.png";
import gym from "../../../ImgFolder/gym.png";
import visit from "../../../ImgFolder/visit.png";
import router from "../../../ImgFolder/router.png";

const Schlorship = () => {
  return (
    <>
      <StudentNavBar />
      <div className="hostel-main-div">
        <div className="bg">
          <CarouselImg
            img1={img1}
            img2={img2}
            img3={img3}
            w={"100%"}
            h={"100vh"}
          />
          <div className="hostel-text-div">
            <h1>hostels-home away from home</h1>
            <p>
              Choosing a College is also about choosing a new home. We ensure
              that students dwell in a healthy environment that helps them to
              grow and learn without any obstacle.
              <br />
            </p>
            <p className="span">
              Saheed Bhagat Singh College Campus has separate hostels for boys
              and girls with all modern facilities and attached mess. The hostel
              mess serves fresh and hygienic food. You will be provided with
              facilities like internet, music room, and common room with TV &
              cable facility, salon facilities, room for indoor games and a
              reading room with a collection of national/international
              newspapers, magazines, etc. The hostels’ houses have a fully
              equipped gym and separate courts for Volleyball, BasketBall, and
              Badminton. The concerned and highly-experienced staff looks after
              the university assets and ensures that the hostel remains
              responsive all the time.
            </p>
            <p className="span">
              After a long day of classes, RIT offers a comfortable place to
              relax which makes one feel at home. All students of the college
              have been lodged in two separate hostels for boys and girls, which
              do not include day scholars. These furnished hostels are equipped
              with modern amenities and facilities for sports and recreations
              such as TV, outdoor games, indoor games etc. Students also have
              the facility of choosing an air-conditioned hostel room.
            </p>
          </div>
          <div className="hostel-fees-table">
            <table>
              <thead>
                <tr>
                  <th>Rooms</th>
                  <th>Non Ac(per annum)</th>
                  <th>Ac(per annum)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>room</td>
                  <td>INR</td>
                  <td>USD</td>
                  <td>INR</td>
                  <td>USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hostel-faculty-div">
            <h1>Facilities at Hostels</h1>
            <ul className="hostel-facility-card-div">
              <li className="hostel-facility-card left-bdr">
                <img
                  src={power}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                24 X 7 Power Supply
              </li>
              <li className="hostel-facility-card center-bdr">
                <img
                  src={router}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Wi-Fi Internet Serices
              </li>
              <li className="hostel-facility-card right-bdr">
                <img
                  src={room}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Well-furnished common rooms
              </li>
              <li className="hostel-facility-card left-bdr">
                <img
                  src={gs}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Gymnasium
              </li>
              <li className="hostel-facility-card center-bdr">
                <img
                  src={rr}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Well- equipped reading rooms
              </li>
              <li className="hostel-facility-card right-bdr">
                <img
                  src={canteen}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Night Canteen & Tuck Shops
              </li>
              <li className="hostel-facility-card ">
                <img
                  src={saloon}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Saloon
              </li>
              <li className="hostel-facility-card bottm-bdr">
                <img
                  src={gym}
                  alt="Power Supply"
                  className="hostel-faculty-logo"
                />
                Gym Services
              </li>
              <li className="hostel-facility-card ">
                <img
                  src={visit}
                  alt="Visitors"
                  className="hostel-faculty-logo"
                />
                Visitors & Guest Room
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Schlorship;
