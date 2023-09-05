import React from 'react'
import Nav from './Nav.jsx'
import Signup from "./Signup.jsx"
import Login from "./Login.jsx"
import Home from "./Home.jsx"
import AdminRegister from './AdminRegister.jsx'
import AdminDashboard from './Admin/AdminDashboard.jsx'
import AddAcademyManager from './Admin/AddAcademyManager.jsx'
import ViewAcademy from "./Admin/ViewAcademy.jsx"
import ViewAcademyManager from "./Admin/ViewAcademyManager.jsx"
import ViewBranch from "./Admin/ViewBranch.jsx"
import ViewCourse from "./Admin/ViewCourse.jsx"
import AdminHome from "./Admin/AdminHome.jsx"
import Updatemanagerdeatils from './Admin/Updatemanagerdetails.jsx'
import ViewManagerDetails from "./Admin/ViewManagerDetails.jsx"
import AddAcademy from './Admin/AddAcademy.jsx'
// import Navbar from './Navbar.jsx'
import "./css/app.css"
// import "./css/login.css"

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
       <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/adminRegister' element={<AdminRegister/>}/>
           <Route path='/home' element={<Home/>}/>
            <Route path='/adminLogin' element={<AdminRegister/>}/>
            <Route path='/adminDashboard' element={<AdminDashboard/>}>
              <Route path={"/adminDashboard/addAcademyMan"} element={<AddAcademyManager/>}/>
              <Route path={"/adminDashboard/viewAcademyMan"} element={<ViewAcademyManager/>}/>
              <Route path={"/adminDashboard/viewAcademy"} element={<ViewAcademy/>}/>
              <Route path={"/adminDashboard/viewBranch"} element={<ViewBranch/>}/>
              <Route path={"/adminDashboard/viewCourse"} element={<ViewCourse/>}/>
              <Route path={"/adminDashboard/home"} element={<AdminHome/>}/>
              <Route path={`/adminDashboard/view/:id`} element={<ViewManagerDetails/>}/>
              <Route path={`/adminDashboard/update/:id`} element={<Updatemanagerdeatils/>}/>
              <Route path={`/adminDashboard/academies/addacademy/:id`} element={<AddAcademy/>}/>
            </Route>
            
        </Routes>
      </Router>
        
      </>

  )
}

export default App

