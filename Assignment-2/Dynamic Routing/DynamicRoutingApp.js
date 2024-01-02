import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Product from './Product';
import ProductDetails from './ProductDetails';
import About from './About';
import Navbar from '../../Component/Navbar';


function DynamicRoutingApp (){
  return (
    <>
    <header>
    <Navbar/>
    </header>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product-detail/:productId' element={<ProductDetails/>}/>
      <Route path='notfound' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default DynamicRoutingApp;
