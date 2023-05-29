import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}
