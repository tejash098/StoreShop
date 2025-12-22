import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Components/Pages/Products'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App