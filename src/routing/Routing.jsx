import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/login/Login'
import SignUp from '../auth/signUp/SignUp'
import Home from '../pages/home/Home'
import Header from '../components/header/Header'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing