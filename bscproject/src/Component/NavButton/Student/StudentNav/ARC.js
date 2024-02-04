import React from "react";
import StudentNavBar from "../StudentNavBar";
import Footer from "../../../Footer/ftr";

const ARC = () => {
  const [arcData, setArcData] = React.useState([]);
  React.useEffect(() => {
    setArcData(data);
  }, []);

  return (
    <>
      <StudentNavBar />
      <div className="Student-main-card-div arc-main-div">
        <div className="student-main-title">
          <h2>Anti-Raging Cell</h2>
        </div>
        <h4>ANTI RAGGING MEASURES</h4>
        <p>
          What Constitutes Ragging?
          <br />
          Ragging constitutes one or more of any of the following acts:
        </p>
        <ul className="arc-ul">
          {arcData.map((elem) => {
            return (
              <>
                <li style={{ listStyle: "lower-alpha" }} key={elem.id}>
                  <p>{elem.content}</p>
                </li>
              </>
            );
          })}
        </ul>
        <p className="dark">
          Toll Free Number(Anti Ragging Helpline):- 1800-180-55222 E-mail:-
          helpline@antiragging.net
        </p>
        <p>"student contact to chief proctor for any type of ragging"</p>
      </div>
      <Footer />
    </>
  );
};
const data = [
  {
    id: 1,
    content:
      "Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.",
  },
  {
    id: 2,
    content:
      "Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.",
  },
  {
    id: 3,
    content:
      "Asking any student to do any act which such student will not in the  ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student.",
  },
  {
    id: 4,
    content:
      "Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.",
  },
  {
    id: 5,
    content:
      " Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students..",
  },
  {
    id: 6,
    content:
      "Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students",
  },
  {
    id: 7,
    content:
      "Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students",
  },
  {
    id: 8,
    content:
      "Any act or abuse by spoken words, emails, post, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student..",
  },
  {
    id: 9,
    content:
      "Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher",
  },
];
export default ARC;
