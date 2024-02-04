import React from "react";
import StudentNavBar from "../StudentNavBar";

const CourseOffered = () => {
  const [courseData, setCourseData] = React.useState([]);

  React.useEffect(() => {
    setCourseData(data);
  }, []);

  return (
    <>
      <StudentNavBar />
      <div className="Student-main-card-div">
        <div className="student-main-title">
          <h2>Course Offered</h2>
        </div>
        <table className="Student-table">
          <thead>
            <tr className="select">
              <th>Sr.No.</th>
              <th>Course</th>
              <th>Subject</th>
              <th>UG/PG</th>
              <th>Alloted Seats</th>
              <th>Aided/Self Finance</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((elem) => {
              const { id, course, graduate, subject, seat, type, cls } = elem;
              return (
                <>
                  <tr className={`table-data ${cls} select`} key={id}>
                    <td>{id}</td>
                    <td>{course}</td>
                    <td>{subject}</td>
                    <td>{graduate}</td>
                    <td>{seat}</td>
                    <td>{type}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
const data = [
  {
    id: 1,
    course: "B.A",
    subject:
      "(History, Political Science, Sociology, Economics, English, Hindi, Geography, Physical Education, Sanskrit)",
    graduate: "UG",
    seat: "180",
    type: "Aided",
    cls: "even",
  },
  {
    id: 2,
    course: "B.A",
    subject:
      "(History, Political Science, Sociology, Economics, English, Hindi, Geography, Physical Education, Sanskrit)",
    graduate: "UG",
    seat: "180",
    type: "Aided",
    cls: "odd",
  },
];
export default CourseOffered;
