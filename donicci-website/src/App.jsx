import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenShoe from './Pages/MenShoe';
import ProductDetails from './Pages/ProductDetails';

/* eslint-disable*/
function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path='/menShoe' element={<MenShoe />} />
          <Route path='/menshoe/ProductDetails' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
