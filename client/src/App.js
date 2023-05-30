import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Logout from './pages/Logout'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/404'

export default function App() {
  const [login, setlogin] = useState(false);
  return (
    <div className='container'>
      <Navbar login={login} />
      <Routes>
        <Route exact path='/' element={<Home setlogin={setlogin} />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout setlogin={setlogin} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
