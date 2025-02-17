import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/login/Login'
import SignUp from '../auth/signUp/SignUp'
import Home from '../pages/home/Home'
import Header from '../components/header/Header'
import PostJob from '../pages/postJob/PostJob'
import JobDetails from '../pages/jobDetails.jsx/JobDetail'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/job-detail/:id' element={<JobDetails/>}/>
        <Route path='/post-job' element={<PostJob/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing