import React from "react";
import "./Accordion.css";
import AccordionLeft from "../AccordionLR/AccordionLeft";
import AccordionRight from "../AccordionLR/AccordionRight";

const Table = ({ department, props, left, right }) => {
  return (
    <>
      <div className="table-main-div">
        <div className="table-main-title">
          <h1>{department}</h1>
        </div>

        <div
          className="accordion accordion-flush table-sub-div"
          id="accordionFlushExample"
        >
          <div className="table-name">
            <h3 className="radius">{left}</h3>

            {props.map((elem, ind) => {
              return (
                <>
                  <div
                    id={elem.id}
                    className={`accordion-collapse collapse ${elem.cls2}`}
                    data-bs-parent="#accordionFlushExample"
                  ></div>
                  <AccordionLeft key={ind} props={elem} />
                </>
              );
            })}
          </div>

          <div className="table-desc">
            <h3 className="radius">{right}</h3>
            <div className="accordion-body">
              <table className="table-div">
                {/* <thead>
                  <tr>
                    <th className="sr">Sr. No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Contact No.</th>
                    <th>Email id</th>
                  </tr>
                </thead> */}
                {props.map((elem, ind) => {
                  return (
                    <>
                      <AccordionRight key={ind} props={elem} />
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
