import React from "react";
import StudentNavBar from "../StudentNavBar";
import Footer from "../../../Footer/ftr";

const AddmissionProcess = () => {
  const [addData, setAddData] = React.useState([]);
  React.useEffect(() => {
    setAddData(data);
  }, []);

  return (
    <>
      <StudentNavBar />
      <div className="Student-main-card-div">
        <div className="student-main-title">
          <h2>Addmission process</h2>
        </div>
        <ul>
          {addData.map((elem) => {
            const { title, content, id } = elem;
            return (
              <>
                <li className="ls">
                  <p>
                    <span>{title}</span> {content}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
        <div className="second-div">
          <h4>Doctrol Programs</h4>
          <p>
            Two Departments (University approved Research Centers) offering Ph.
            D. Programmes :-
          </p>
          <ul className="ls">
            <li className="ls">Department of Agriculture Chemistry</li>
            <li className="ls">Department of Horticulture</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
const data = [
  {
    id: 1,
    title: "General Courses:",
    content:
      "Students are selected on the basis of merit as per the rules of C.C.S. University, Meerut. Online registration on the university website is mandatory for all students. The students have to register themselves in the college, too. Institution provides prospectus to each student that contains information regarding rules of admission, eligibility criteria for opting different subjects, subject combination, and fee structure for various courses, dress code and other facilities provided by college. Institutional website is also available for the updated information.",
  },
  {
    id: 2,
    title: "Professional Courses:",
    content:
      " Admissions into B.B.A., B.Sc. (Home Science) and M.Sc. courses is done as per merit (procedure followed is similar to the General Courses). For B. Ed. Course, students are selected through entrance examination which is conducted at the state level. Thereafter, counseling is done at state level and students are allotted the college seats.",
  },
];
export default AddmissionProcess;
