import React, { useState, useEffect } from "react";
import "./AdministorMain.css";
// import Footer from "../../../Component/Footer/ftr";
import Table from "../AccordionLR/Table";
import AdministorData from "./AdministorData";

const AdministrationMain = () => {
  const [data, setData] = useState([]);
  console.log(data.id);
  useEffect(() => {
    setData(AdministorData);
  }, []);

  return (
    <>
      <Table
        department="Administor department"
        left="Department"
        right="Description"
        props={data}
      />
    </>
  );
};

export default AdministrationMain;
