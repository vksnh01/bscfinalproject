import React from "react";
import StudentNavBar from "../StudentNavBar";
import CarouselImg from "../../Home/CarouselImg";
import img1 from "../../../ImgFolder/cc1.jpg";
import img2 from "../../../ImgFolder/cc2.jpg";
import img3 from "../../../ImgFolder/cc3.jpg";
import "../StudentMain.css";
import Footer from "../../../Footer/ftr";

const ComputerCell = () => {
  return (
    <>
      <StudentNavBar />
      <div className="Student-main-card-div">
        <div className="student-main-title">
          <h2>Computer Cell</h2>
        </div>
        <div className="inner-section">
          <div className="Student-text-div">
            <p>
              <span className="title">Computer Lab: </span>
              <br />
              There is a separate computer lab connected with Wi-Fi broadband
              for the college students having 40 computers for providing the
              computer education to the student.
              <br />
              Students, faculty and staff have access to the computer labs,
              which provide the tools and technologies to produce websites, edit
              papers, complete class assignments, communicate via email, conduct
              data analyses and access library resources. Microsoft Windows
              software is available for word processing, statistics,
              spreadsheets and database management. A variety of graphics and
              website-creation software programs are also available.
              <br />
              This lab features 40 personal-computing workstations with
              Microsoft Windows 10 and Office 2016 applications, plus printer
              and scanner capabilitiy. A number of specialty software packages,
              such as graphic, web design and statistical analysis programs, are
              also available. Lab consultant staff can assist students with
              little or no prior computer experience. Printing services are
              offered for a small fee.
            </p>
          </div>
          <div className="Student-img-div">
            <CarouselImg
              img1={img1}
              img2={img2}
              img3={img3}
              w={"100%"}
              h={"60vh"}
            />
          </div>
        </div>
        <div className="Student-text-div">
          <p className="title">Research Commons Computer Lab</p>
          <p className="content">
            This lab is a multi-purpose technology and collaborative workspace
            located at the north end of the Research Commons on the second
            floor. The lab is dedicated to meeting the teaching, learning and
            research needs of the faculty, staff and students Additionally, the
            Research Commons is equipped with 13 PCs, 3 scanners, two iMacs, two
            high-end workstations, plus black-and-white and color printing
            services for a fee. Other services include library and research
            support provided by appointment be the School of Social Work
            reference librarian. Computers are managed and supported by SSW Tech
            Staff.
          </p>
        </div>
        <div className="Student-text-div">
          <p className="title">Computer Lab Rules and Policies</p>
          <p className="content">
            You must be a current UW student, faculty or staff to use computer
            equipment, labs and technology assets at the School of Social Work.
            <br />
            A visiting person can be sponsored to get access to a lab computer
            by following this procedure.
            <br />
            Please be respectful of this community resource by being careful
            with the content you are viewing and listening to. Also, labs are
            areas of work and study so keeping noise to a minimum is necessary.
            No food or drinks please.
            <br />
            Please take a moment to review the rules and regulations governing
            the use of University of Washington computers and network resources.
            For details on current UW guidelines and Washington state laws, read
            University of Washington Computing & Networking Rules & Regulations.
          </p>
        </div>
        <div className="Student-text-div">
          <p>
            <span className="title">
              Hours of Operation (Fall, Winter and Spring quarters)
            </span>
            <br />
            <span className="content">Monday – Friday, 9 a.m. – 5 p.m.</span>
            <br />
            <span className="content">Saturday. 9 a.m. – 2 p.m.</span>
            <br />
            <span className="content">Sunday, Holiday</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ComputerCell;
