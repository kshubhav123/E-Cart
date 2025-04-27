import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./App.css"
import Header from './components/Header'
import Placeorder from './pages/Placeorder'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/placeorder" element={<Placeorder/>}/>
    </Routes>
    </>
  )
}

export default App