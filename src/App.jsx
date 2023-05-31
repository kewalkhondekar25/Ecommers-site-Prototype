import React from 'react'
import { useEffect } from 'react'
import './App.css'
import './effects.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import About from './Components/About'
import SelectedMeals from './Components/SelectedMeals'
import Cart from './Components/Cart'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'
import FAQ from './Pages/FAQ'
import Articles from './Pages/Articles'
import ContactUs from './Pages/ContactUs'



function App() {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/meals/:id' element={<SelectedMeals />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path ='/faq' element={<FAQ/>}></Route>
          <Route path='/articles' element={<Articles/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
