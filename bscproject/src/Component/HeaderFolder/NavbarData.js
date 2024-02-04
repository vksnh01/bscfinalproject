import HomeMain from '../NavButton/Home/HomeMain';
import MessageMain from '../NavButton/Message/MessageMain';
import AdminstrationMain from '../NavButton/Administor/AdminsitrationMain';
import FacultytMain from '../NavButton/Faculty/FacultyMain';
import GalleryMain from '../NavButton/Gallery/GalleryMain';
import AboutMain from '../NavButton/About/AboutMain';
import LoginMain from '../NavButton/Login/LoginMain';
import LibraryMain from '../NavButton/Library/LibraryMain';
import StudentMain from '../NavButton/Student/StudentMain';
import ContactMain from '../NavButton/Contact/ContactMain';
// StudentData
import Course from '../NavButton/Student/StudentNavData'

const NavData =[
    {
        id:1,
        name:'home',
        path:'/',
        element:<HomeMain />,
        cls:"navclass"
    }, 
    ,{
        id:2,
        name:'administration',
        path:'/administration',
        element:<AdminstrationMain />,
        cls:"navclass"
    },
    // {
    //     id:3,
    //     name:'faculty',
    //     path:'/faculty',
    //     element:<FacultytMain />,
    //     cls:"navclass"
    // },
     {
        id:4,
        name:'gallery',
        path:'/gallery',
        element:<GalleryMain />,
        cls:"navclass"
    },
    {
        id:5,
        name:'about',
        path:'/about',
        element:<AboutMain />
    }, 
    // {
    //     id:6,
    //     name:'Login',
    //     path:'/login',
    //     element:<LoginMain />
    // }
    , {
        id:7,
        name:'library',
        path:'/library',
        element:<LibraryMain />
    }, {
        id:8,
        name:'contact',
        path:'/contact',
        element:<ContactMain />
    }, 
    {
        id:9,
        name:'students',
        path:'/students',
        element:<StudentMain />
    }, 
]

export default NavData;