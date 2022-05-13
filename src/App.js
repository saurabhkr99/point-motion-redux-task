import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ManageProducts from './pages/ManageProducts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/manageproducts' element={<ManageProducts />} />
      </Routes>
    </>
  );
}

export default App;
