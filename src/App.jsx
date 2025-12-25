import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Components/Pages/Products'
import Footer from './Components/Footer'
import AddProducts from './Components/Pages/AddProducts'
import CartItems from './Components/Pages/CartItems'
import ContactUs from './Components/Pages/ContactUs'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/cart' element={<CartItems/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App