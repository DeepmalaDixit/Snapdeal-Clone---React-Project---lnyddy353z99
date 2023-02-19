import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Cart from './Components/Cart/Cart';
import FullData from './Components/FullData/FullData';
import Home from './Components/Home/Home';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<FullData />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='product/:id/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
// fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
// .then(res => res.json())
// .then(data => console.log(data));
