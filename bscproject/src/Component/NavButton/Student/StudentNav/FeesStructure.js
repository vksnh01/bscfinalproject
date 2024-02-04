import React from "react";
import StudentNavBar from "../StudentNavBar";
import "../StudentMain.css";

const FeesStructure = () => {
  const [fsData, setFsData] = React.useState([]);

  React.useEffect(() => {
    setFsData(data);
  }, []);

  return (
    <>
      <StudentNavBar />
      <div className="Student-main-card-div">
        <div className="student-main-title">
          <h2>Fees Structures</h2>
          <table className="fs-table">
            <thead className="Fees-structure">
              <tr>
                <th>Sr.No.</th>
                <th>Course</th>
                <th>Duration</th>
                <th>1st Year</th>
                <th>2nd Year</th>
                <th>3rd Year</th>
                <th>4th Year</th>
                <th>Total Fees</th>
              </tr>
            </thead>
            <tbody>
              {fsData.map((elem) => {
                const {
                  id,
                  course,
                  duration,
                  first,
                  second,
                  third,
                  fourth,
                  total,
                cls} = elem;
                return (
                  <>
                    <tr className={cls}>
                      <td>{id}</td>
                      <td>{course}</td>
                      <td>{duration}</td>
                      <td>{first}</td>
                      <td>{second}</td>
                      <td>{third}</td>
                      <td>{fourth}</td>
                      <td>{total}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const data = [
  {
    id: 1,
    course: "b.a",
    duration: 3,
    first: 6000,
    second: 6000,
    third: 6000,
    fourth: "-",
    total: 18000,
    cls:"dEven"
  },
  {
    id: 1,
    course: "B.sc(Computer Science)",
    duration: 3,
    first: 12000,
    second: 12000,
    third: 12000,
    fourth: "-",
    total: 36000,
    cls:"dOdd"
  },
];
export default FeesStructure;
