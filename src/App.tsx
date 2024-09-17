import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/users/Header';
import Footer from './components/users/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/users/Home';
import Product from './pages/users/Product';
import Detail from './pages/users/Detail';
import Cart from './pages/users/Cart';
import Oder from './pages/users/Oder';



function App() {
  return ( <>
  <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/' element={<Product/>} />

        <Route path='/detail/:MaSanPham' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/oder' element={<Oder/>} />
      </Routes>
    </Router>
  <Footer/>
  </>
  );
}

export default App;
