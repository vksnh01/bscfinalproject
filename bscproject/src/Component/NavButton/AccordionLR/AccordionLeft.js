import React from "react";
import './Accordion.css';

const AccordionLeft =({props})=>{
    const {id,title,cls,aria,}=props;
console.log(cls);
    return(<>
   <h2 className="accordion-header">
      <button className={`accordion-button ${cls}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={aria} aria-controls={id}>
       {title}
      </button>
    </h2>
    </>)
};

export default AccordionLeft;