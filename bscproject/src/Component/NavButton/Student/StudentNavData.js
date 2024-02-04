import AddmissionProcess from './StudentNav/AddmissionProcess';
import Arc from './StudentNav/ARC';
import ComputerCell from './StudentNav/ComputerCell';
import CourseOffered from './StudentNav/CourseOffered';
import FeesStructure from './StudentNav/FeesStructure';
import Hostel from './StudentNav/Hostel';
import Nss from './StudentNav/Nss';
import Result from './StudentNav/Result';
import Schlorship from './StudentNav/Hostel';
import Sports from './StudentNav/Sports';
import Syllabus from './StudentNav/Syllabus'

const data =[
    {
        id:1,
        name:'Addmission Process',
        path:'/students/addmissionProcess',
        element:<AddmissionProcess />,
        // cls:"navclass"
    },
    {
        id:2,
        name:'Anti-raging cell',
        path:'/students/antiRegingcell',
        element:<Arc />,
        // cls:"navclass"
    },
    {
        id:3,
        name:'nss',
        path:'/students/nss',
        element:<Nss />,
        // cls:"navclass"
       
    },
    {
        id:4,
        name:'Course Offered',
        path:'/student/courseOffered',
        element:<CourseOffered />,
        // cls:"navclass"
    }, 
    {
        id:5,
        name:'Fees Structure',
        path:'/students/feesStructure',
        element:<FeesStructure />,
        // cls:"navclass"
    },
    {
        id:6,
        name:'Hostel',
        path:'/students/hostel',
        element:<Hostel />,
        // cls:"navclass"
    }, {
        id:7,
        name:'Computer Cell',
        path:'/students/computerCell',
        element:<ComputerCell />,
        // cls:"navclass"
    },
    {
        id:8,
        name:'results',
        path:'/students/results',
        element:<Result />,
        // cls:"navclass"
    },
    {
        id:9,
        name:'Schlorship',
        path:'/students/schlorship',
        element:<Schlorship />,
        // cls:"navclass"
    }, {
        id:10,
        name:'Sports',
        path:'/students/sports',
        element:<Sports />,
        // cls:"navclass"
    },
    {
        id:11,
        name:'Syllabus',
        path:'/students/syllabus',
        element:<Syllabus />,
        // cls:"navclass"
    },
   
   
   
  
]
export default data;