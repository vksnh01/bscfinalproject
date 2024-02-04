import React from "react";
import "./Accordion.css";

const AccordionRight = ({ props }) => {
  console.log(props);
  const { id, cls2, sr, name, desti, contact, email, sclass } = props;
  return (
    <>
      <div
        id={id}
        className={`accordion-collapse collapse ${cls2}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <table className="table-div">
            <thead className="ban">
              <tr>
                <th className="sr">Sr. No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Contact No.</th>
                <th>Email id</th>
              </tr>
            </thead>
            <tbody>
          
              <tr className={sclass}>
                <td className="ta-c">{sr}</td>
                <td className="tt-c">{name}</td>
                <td className="tt-c">{desti}</td>
                <td>{contact}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AccordionRight;
