import './index.css'
import React, { useState } from 'react'
import './App.css'
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import SellCarForm from './pages/SellCarForm';
import CarGallery from './pages/CarGallery';
import LoaderCard from './components/LoaderCard';

function App() {

  return(
    <Layout>
      <div className="container ">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/user/login' element={<Login />} />
          <Route path="/cars" element={<Home />} />
          <Route path="/cars/sell" element={<SellCarForm />} />
          <Route path="/cars/details" element={<CarGallery/>} />
          {/* <Route path="/cars/details/:id" element={<CarGallery/>} /> */}
          <Route path="/loader" element={<LoaderCard/>} />
          <Route path='/user/logout' element={<Login />} />
          <Route path="*" element={<h1 className='text-3xl font-bold'>404 Not Found</h1>} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
