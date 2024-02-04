import React,{useState,useEffect} from "react";
import Table from "../AccordionLR/Table";
import './FacultyMain.css'

const FacultyMain =()=>{
    const [facultyData,setFacultyData] = useState([]);
    useEffect(()=>{
        setFacultyData(fData);
    },[]);

    return(<>
    <Table 
    department="faculties"
    left="Faculty"
    right="Staff/Employees"
     props={facultyData}/>
      
    </>)
}
const fData=[
    {
        id: "flush-collapseAgri",
        cls: "",
        cls2: "show",
        aria: true,
        title: "Agriculture",
    },{
        id: "flush-collapseArt",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Art",
    },{
        id: "flush-collapseBtc",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "BTC",
    },{
        id: "flush-collapseBped",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "B.Ped",
    },{
        id: "flush-collapseBed",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "B.Ed",
    },{
        id: "flush-collapseCom",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Commerce",
    },{
        id: "flush-collapseHS",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Home Science",
    },{
        id: "flush-collapseManage",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Management",
    },{
        id: "flush-collapsePE",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Physical Education",
    },{
        id: "flush-collapseScience",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Science",
    },{
        id: "flush-collapseCS",
        cls: "collapsed",
        cls2: "",
        aria: true,
        title: "Computer Science",
    },
]
export default FacultyMain;